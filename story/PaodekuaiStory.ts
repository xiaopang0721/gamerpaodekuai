/**
* name 跑得快-剧情
*/
module gamepaodekuai.story {
	const enum MAP_STATUS {
		MAP_STATE_NONE = 0,			//初始化
		MAP_STATE_CARDROOM_CREATED = 1,  	//房间创建后
		MAP_STATE_CARDROOM_WAIT = 2,		//房卡等人中
		MAP_STATE_SHUFFLE = 3,  	//洗牌中
		MAP_STATE_DEAL = 4,			//准备发牌
		MAP_STATE_DEAL_END = 5,		//发牌结束
		MAP_STATE_QIANGGUAN = 6,	//准备抢关
		MAP_STATE_PLAYING = 7, 	    //准备游戏
		MAP_STATE_SETTLE = 8,    	//准备结算
		MAP_STATE_SHOW = 9,         //准备摊牌
		MAP_STATE_WAIT = 10,      	//等待下一局
		MAP_STATE_END = 11,			//结束
	}

	export class PaodekuaiStory extends gamecomponent.story.StoryNormalBase {
		private _paodekuaiMgr: PaodekuaiMgr;
		private _cardsTemp: any = [];
		private _paodekuaiMapInfo: PaodekuaiMapInfo;
		private _battleIndex = -1;

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this.init();
		}

		init() {
			if (!this._paodekuaiMgr) {
				this._paodekuaiMgr = new PaodekuaiMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK, this, this.updateBattledInfo);
			this.onIntoNewMap();
			super.init();
		}

		get paodekuaiMgr() {
			return this._paodekuaiMgr;
		}

		set mapLv(lv: number) {
			this.maplv = lv;
		}

		get mapLv() {
			return this.maplv;
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;

			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(PaodekuaiPageDef.PAGE_PDK_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._paodekuaiMapInfo = mapinfo as PaodekuaiMapInfo;
			if (mapinfo) {
				this.onUpdateCardInfo();
			} else {
				this._paodekuaiMgr.unitOffline = this._offlineUnit;
			}
		}

		private updateBattledInfo(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo as PaodekuaiMapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mainUnit) return;
			let battleInfoMgr = mapinfo.battleInfoMgr;
			let mainIdx = mainUnit.GetIndex();
			if (!mainIdx) return;
			if (this._paodekuaiMgr.isReDealCard) return;
			//好几局，用这个区分一下
			for (let i = 0; i < battleInfoMgr.info.length; i++) {
				let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo.Type == 11) {
					this._battleIndex = i;
				}
			}
			for (let i = 0; i < battleInfoMgr.info.length; i++) {
				let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo instanceof gamecomponent.object.BattleInfoMingPai && this._battleIndex < i) {	//发牌
					let idx = battleInfo.SeatIndex;
					if (idx == mainIdx) {
						this._cardsTemp = [];
						for (let k = 0; k < battleInfo.Cards.length; k++) {
							this._cardsTemp.push(battleInfo.Cards[k]);
						}
						let handle = new Handler(this, this._paodekuaiMgr.createObj);
						this._paodekuaiMgr.Init(this._cardsTemp, handle);
						this._paodekuaiMgr.sort();
						if (this._paodekuaiMgr.isReLogin) {
							this._paodekuaiMgr.refapai();
						} else {
							this._paodekuaiMgr.fapai();
						}
						this._paodekuaiMgr.isReDealCard = true;
					}
				}
			}
		}

		//断线重连,重发下牌
		private onUpdateCardInfo(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			let statue = mapinfo.GetMapState();
			if (statue >= MAP_STATUS.MAP_STATE_SHUFFLE && statue <= MAP_STATUS.MAP_STATE_WAIT) {
				this._paodekuaiMgr.isReLogin = true;
				if (statue > MAP_STATUS.MAP_STATE_DEAL) {
					this.updateBattledInfo();
				}
			}
		}

		createofflineUnit() {
			//创建假的地图和精灵
			let unitOffline = new UnitOffline(this._game.sceneObjectMgr);
			if (this._game.sceneObjectMgr.mainPlayer) {
				unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
				unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, this._game.sceneObjectMgr.mainPlayer.playerInfo.headimg);
				unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_type);
				unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, this._game.sceneObjectMgr.mainPlayer.playerInfo.vip_level);
			}
			unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);

			this._offlineUnit = unitOffline;
		}

		enterMap() {
			//各种判断
			if (this.mapinfo) return false;
			if (!this.maplv) {
				this.maplv = this._last_maplv;
			}
			this._game.network.call_match_game(this._mapid, this.maplv)
			return true;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			super.clear();
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.off(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK, this, this.updateBattledInfo);
			if (this._paodekuaiMgr) {
				this._paodekuaiMgr.clear();
				this._paodekuaiMgr = null;
			}
			this._paodekuaiMapInfo = null;
		}
	}
}
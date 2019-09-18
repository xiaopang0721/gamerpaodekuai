/**
* 跑得快
*/
module gamerpaodekuai.data {
	export class RpaodekuaiMapInfo extends gamecomponent.object.MapInfoT<RpaodekuaiData> {
		//地图状态变更
		static EVENT_PDK_STATUS_CHECK: string = "PaodekuaiMapInfo.EVENT_PDK_STATUS_CHECK";
		//战斗体更新
		static EVENT_PDK_BATTLE_CHECK: string = "PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK";
		//倒计时时间戳更新
		static EVENT_PDK_COUNT_DOWN: string = "PaodekuaiMapInfo.EVENT_PDK_COUNT_DOWN";
		private isFirst: boolean = false;	//只是显示详情空行用的

		constructor(v: SceneObjectMgr) {
			super(v, () => { return new RpaodekuaiData() });
		}

		onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(RpaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(RpaodekuaiMapInfo.EVENT_PDK_STATUS_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
				this._sceneObjectMgr.event(RpaodekuaiMapInfo.EVENT_PDK_COUNT_DOWN);
			}
		}

		public getBattleInfoToString(): string {
			let str: string = "";
			for (let i = 0; i < this._battleInfoMgr.info.length; i++) {
				let battleInfo = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
				if (battleInfo.Type == 10) {	//抢关
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoStart;
					let newString = info.BetVal == 1 ? name + "：抢关" : name + "：不抢";
					if (!this.isFirst) {
						this.isFirst = true;
						if (str == "") {
							str = newString;
						} else {
							str = str + "#" + "" + "#" + newString;
						}
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 7) {	//先手
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSeeCard;
					let newString = "先出是：" + name;
					if (!this.isFirst) {
						this.isFirst = true;
						if (str == "") {
							str = newString;
						} else {
							str = str + "#" + "" + "#" + newString;
						}
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 2) {	//余牌
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBet;
					let newString = name + "余牌：" + info.BetVal;
					str = str + "#" + newString;
				} else if (battleInfo.Type == 11) {	//结算
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
					let newString = name + "盈利：" + info.SettleVal;
					str = str + "#" + newString;
					this.isFirst = false;
				}
			}
			return str;
		}

		//通过座位取玩家名字
		private GetPlayerNameFromSeat(index: number): string {
			let name: string;
			let users = this._battleInfoMgr.users;
			name = users[index - 1].name;
			return name
		}
	}
}
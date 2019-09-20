/**
* 跑得快-HUD
*/
module gamerpaodekuai.page {
	export class RpaodekuaiPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.paodekuai.PaoDeKuai_HUDUI;
		private _player: any;
		private _paodekuaiMgr: RpaodekuaiMgr;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_rpaodekuai.atlas_game_ui + "paodekuai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.paodekuai.PaoDeKuai_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);
			this._game.playMusic(Path.music + "paodekuai/pdk_BGM.mp3");
			this._paodekuaiMgr = new RpaodekuaiMgr(this._game);

			// for (let index = 0; index < this._viewUI.box_roomcard.numChildren; index++) {
			// 	this._viewUI.box_roomcard._childs[index].visible = false;
			// }
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			(this._viewUI.view_hud as TongyongHudNqpPage).onOpen(this._game, RpaodekuaiPageDef.GAME_NAME, true);
			for (let index = 0; index < this._viewUI.box_roomcard.numChildren; index++) {
				this._viewUI.box_roomcard._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_roomcard._childs[index], {
					right: -300
				}, 200 + index * 100, Laya.Ease.linearNone);
			}

			this._viewUI.img_room_create.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			switch (target) {
				case this._viewUI.img_room_create:
					this._game.uiRoot.general.open(DatingPageDef.PAGE_PDK_CREATE_CARDROOM);
					break;
				case this._viewUI.img_room_join:
					this._game.uiRoot.general.open(DatingPageDef.PAGE_PDK_JOIN_CARDROOM);
					break;
				default:
					break;
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room_create.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._game.stopMusic();
			}

			super.close();
		}
	}
}
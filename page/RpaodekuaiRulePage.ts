/**
* 跑得快-规则
*/
module gamerpaodekuai.page {
	const enum TYPE_INDEX {
		TYPE_JIANJIE = 0,
		TYPE_TYPE = 1,
		TYPE_WANFA = 2,
		TYPE_QIANGGUAN = 3,
		TYPE_JIESUAN = 4,
	}

	export class RpaodekuaiRulePage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.paodekuai.PaoDeKuai_GuiZeUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_rpaodekuai.atlas_game_ui + "paodekuai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.paodekuai.PaoDeKuai_GuiZeUI');
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			if (this.dataSource) {
				this._viewUI.btn_tab.selectedIndex = this.dataSource;
			}
			else {
				this._viewUI.btn_tab.selectedIndex = TYPE_INDEX.TYPE_JIANJIE;
			}

			// this._viewUI.panel_jianjie.vScrollBarSkin = "";
			// this._viewUI.panel_jianjie.vScrollBar.autoHide = true;
			// this._viewUI.panel_jianjie.vScrollBar.elasticDistance = 100;

			this._viewUI.panel_type.vScrollBarSkin = "";
			this._viewUI.panel_type.vScrollBar.autoHide = true;
			this._viewUI.panel_type.vScrollBar.elasticDistance = 100;

			this._viewUI.panel_wanfa.vScrollBarSkin = "";
			this._viewUI.panel_wanfa.vScrollBar.autoHide = true;
			this._viewUI.panel_wanfa.vScrollBar.elasticDistance = 100;

			// this._viewUI.panel_qiangguan.vScrollBarSkin = "";
			// this._viewUI.panel_qiangguan.vScrollBar.autoHide = true;
			// this._viewUI.panel_qiangguan.vScrollBar.elasticDistance = 100;

			this._viewUI.panel_jiesuan.vScrollBarSkin = "";
			this._viewUI.panel_jiesuan.vScrollBar.autoHide = true;
			this._viewUI.panel_jiesuan.vScrollBar.elasticDistance = 100;
		}

		private selectHandler(index: number): void {
			// this._viewUI.panel_jianjie.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_JIANJIE;
			this._viewUI.panel_type.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_TYPE;
			this._viewUI.panel_wanfa.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_WANFA;
			// this._viewUI.panel_qiangguan.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_QIANGGUAN;
			this._viewUI.panel_jiesuan.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_JIESUAN;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_tab.selectedIndex = -1;
			}

			super.close();
		}
	}
}
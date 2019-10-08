/**
* 房卡类型游戏结算页面
*/
module gamerpaodekuai.page {
    export class RpaodekuaiRoomSettlePage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.paodekuai.JieSuan_FangKaUI;
        private _isGameEnd: boolean = false;  //是否结束

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedBlack = true;
            this._isClickBlack = false;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.paodekuai.JieSuan_FangKaUI');
            this.addChild(this._viewUI);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.list_settle.itemRender = this.createChildren("game_ui.tongyong.JieSuanRender2UI", ListRecordItem);
            this._viewUI.list_settle.renderHandler = new Handler(this, this.renderHandler);
            this._viewUI.list_settle.dataSource = this.dataSource[2];
            this._isGameEnd = this.dataSource[3] >= MAP_STATUS.MAP_STATE_END;
            this.setGameEndBtnState(this._isGameEnd);
        }

        //按钮点击
        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_create_room:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_PDK_CREATE_CARDROOM, (page: gamedating.page.CreateCardRoomBase) => {
                        page.game_id = "rpaodekuai";
                    });
                    this.close();
                    break;
                case this._viewUI.btn_tc:
                    let paodekuaiStory = this._game.sceneObjectMgr.story as RpaodekuaiStory;
                    let mapInfo = this._game.sceneObjectMgr.mapInfo as MapInfo;
                    mapInfo = mapInfo as RpaodekuaiMapInfo;
                    let mainUnit = this._game.sceneObjectMgr.mainUnit;
                    if (!paodekuaiStory || !mapInfo || !mainUnit) return;
                    paodekuaiStory.endRoomCardGame(mainUnit.GetIndex(), mapInfo.GetCardRoomId());
                    this._game.sceneObjectMgr.leaveStory();
                    this.close();
                    break
                default:
                    break;
            }
        }

        // 设置最后结束时的按纽状态
        private setGameEndBtnState(isEventOn) {
            this._viewUI.box_jx_info.visible = !this._isGameEnd;
            this._viewUI.btn_create_room.visible = this._viewUI.box_js_info.visible = this._isGameEnd;
            let str = StringU.substitute("本轮游戏已满{0}局...", HtmlFormat.addHtmlColor(this.dataSource[0], TeaStyle.COLOR_YELLOW));
            TextFieldU.setHtmlText(this._viewUI.lb_js, str);
            this._viewUI.btn_tc.visible = this._isGameEnd;
            if (isEventOn) {
                this._viewUI.btn_create_room.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tc.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            } else {
                this._viewUI.btn_create_room.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tc.off(LEvent.CLICK, this, this.onBtnClickWithTween);
            }
        }

        private renderHandler(cell: ListRecordItem, index: number) {
            if (cell) {
                cell.setData(this._game, cell.dataSource);
            }
        }

        protected onBlackSpriteClick() {
            if (!this._isGameEnd) return;
            super.onBlackSpriteClick();
        }

        //倒计时
        private _endTime = this._game.sync.serverTimeBys + 5;
        deltaUpdate(): void {
            if (!this._isGameEnd) {
                let curTime = this._game.sync.serverTimeBys;
                let time = Math.floor(this._endTime - curTime) + 1;
                if (time > 0) {
                    let str = StringU.substitute("{0}后开始{1}{2}局...", HtmlFormat.addHtmlColor(time + "s", TeaStyle.COLOR_YELLOW), HtmlFormat.addHtmlColor(this.dataSource[0] + "/", TeaStyle.COLOR_YELLOW), HtmlFormat.addHtmlColor(this.dataSource[1], TeaStyle.COLOR_YELLOW));
                    TextFieldU.setHtmlText(this._viewUI.lab_xinxi, str);
                } else {
                    // 最后一局不自动关闭
                    this.close();
                }
            }
        }

        public close(): void {
            this.setGameEndBtnState(false);
            super.close();
        }
    }

    class ListRecordItem extends ui.nqp.game_ui.tongyong.JieSuanRender2UI {
        private _game: Game;
        private _data: any;
        setData(game: Game, data: any) {
            this._game = game;
            this._data = data;
            this.img_banker.visible = false;
            this.lab_name.text = this._data.name;
            this.lab_chip.text = this._data.multiple;
            this.lab_multiple.text = this._data.cardCount;
            this.img_tp.visible = false;
            this.img_qgsb.visible = false;
            this.lab_double.visible = false;
            this.img_qg.visible = false;
            if (this._data.isCurQiangGuan) {
                //抢关了
                if (this._data.qgResult == 1) {
                    //抢关成功
                    if (this._data.isQG) {
                        //是否是抢关的人
                    } else {
                        this.img_qg.visible = true;
                        this.lab_double.visible = true;
                    }
                } else {
                    //抢关失败
                    if (this._data.isQG) {
                        this.img_tp.visible = true;
                        this.img_qgsb.visible = true;
                        this.lab_double.visible = true;
                    }
                }
            } else {
                //没有抢关
                if (this._data.cardCount == this._data.maxCount) {
                    //没出过牌
                    this.img_qg.visible = true;
                    this.lab_double.visible = true;
                }
            }
            //炸弹
            this.img_bomb.visible = false;
            if (this._data.bombNum > 0) {
                this.img_bomb.visible = true;
                this.lab_bomb.text = this._data.bombNum;
            }
            this.lab_point.text = this._data.point ? this._data.point : "0";
            this.img_tp.x = this.lab_point.x + this.lab_point.width - 3;
            this.lbl_totalpoint.text = String(this._data.totalPoint);
            this.lab_name.color = this.lab_chip.color = this.lab_multiple.color = this._data.isMain ? "#ffc32c" : TeaStyle.COLOR_WHITE;
            this.lab_double.centerX = this.lab_multiple.centerX + this.lab_multiple.width + 5;
            this.lab_point.color = parseFloat(this._data.point) >= 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
            this.lbl_totalpoint.color = parseFloat(this._data.totalPoint) >= 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
        }

        destroy() {
            super.destroy();
        }
    }
}
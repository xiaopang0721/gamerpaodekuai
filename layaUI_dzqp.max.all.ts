
module ui.dzqp.game_ui.paodekuai.component {
    export class BaoDanUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":70,"height":90},"child":[{"type":"Image","props":{"y":44,"x":35,"skin":"paodekuai_ui/game_ui/paodekuai/tu_bd.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":44,"x":35,"skin":"paodekuai_ui/game_ui/paodekuai/tu_bd.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.component.BaoDanUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai.component {
    export class boomUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":290,"x":640,"skin":"paodekuai_ui/game_ui/paodekuai/effect/boom/img_boom.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":290,"x":640,"skin":"paodekuai_ui/game_ui/paodekuai/effect/boom/img_boom3.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":-370,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":6}]}},{"target":3,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":6},{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":13}],"skin":[{"value":"paodekuai_ui/game_ui/paodekuai/effect/boom/img_boom3.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":0},{"value":"paodekuai_ui/game_ui/paodekuai/effect/boom/img_boom4.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":7},{"value":"paodekuai_ui/game_ui/paodekuai/effect/boom/img_boom5.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":8},{"value":"paodekuai_ui/game_ui/paodekuai/effect/boom/img_boom6.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":9},{"value":"paodekuai_ui/game_ui/paodekuai/effect/boom/img_boom7.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":10},{"value":"paodekuai_ui/game_ui/paodekuai/effect/boom/img_boom8.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":11},{"value":"paodekuai_ui/game_ui/paodekuai/effect/boom/img_boom9.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.component.boomUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai.component {
    export class feijiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":283,"x":1425,"skin":"paodekuai_ui/game_ui/paodekuai/effect/feiji/img_feiji_1.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1425,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":-195,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":40}]}}],"name":"ani1","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.component.feijiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai.component {
    export class menuUI extends View {
		public btn_back:Laya.Button;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"width":180,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","height":337,"anchorY":0},"child":[{"type":"Image","props":{"y":57,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":223,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":279,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":112,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":168,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":9,"x":14,"var":"btn_back","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh.png"}},{"type":"Button","props":{"y":118,"x":14,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fz.png"}},{"type":"Button","props":{"y":228,"x":14,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":173,"x":14,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":63,"x":14,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zq.png"}},{"type":"Button","props":{"y":282,"x":14,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.component.menuUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai.component {
    export class shunziUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":193,"x":1289,"skin":"paodekuai_ui/game_ui/paodekuai/effect/shunzi/img_shunzi_1.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1289,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":-211,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":40}]}}],"name":"ani1","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.component.shunziUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai.component {
    export class TouXiangUI extends View {
		public img_head:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public img_tuoguan:Laya.Image;
		public img_txk:Laya.Image;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":1,"x":1},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":63,"x":49,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":4,"x":-1,"wordWrap":true,"width":99,"var":"txt_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#12093d","align":"center"}},{"type":"Text","props":{"y":109,"x":-7,"wordWrap":true,"width":110,"var":"txt_money","text":"000000.00","leading":6,"height":22,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Image","props":{"y":27,"x":13,"visible":false,"var":"img_tuoguan","skin":"paodekuai_ui/game_ui/paodekuai/tu_tg0.png"}},{"type":"Image","props":{"y":14,"x":3,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":105,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.component.TouXiangUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai {
    export class FangKa_ChuangJianUI extends View {
		public btn_close:Laya.Button;
		public panel_para:Laya.Panel;
		public box_round:Laya.Box;
		public box_round0:Laya.Box;
		public cb_round0:Laya.CheckBox;
		public txt_round0:laya.display.Text;
		public box_round1:Laya.Box;
		public cb_round1:Laya.CheckBox;
		public txt_round1:laya.display.Text;
		public box_round2:Laya.Box;
		public cb_round2:Laya.CheckBox;
		public txt_round2:laya.display.Text;
		public box_round3:Laya.Box;
		public cb_round3:Laya.CheckBox;
		public txt_round3:laya.display.Text;
		public box_pay:Laya.Box;
		public box_pay0:Laya.Box;
		public cb_pay0:Laya.CheckBox;
		public txt_pay0:laya.display.Text;
		public box_pay1:Laya.Box;
		public cb_pay1:Laya.CheckBox;
		public txt_pay1:laya.display.Text;
		public box_player:Laya.Box;
		public box_player0:Laya.Box;
		public cb_player0:Laya.CheckBox;
		public box_player1:Laya.Box;
		public cb_player1:Laya.CheckBox;
		public box_cards:Laya.Box;
		public box_cards0:Laya.Box;
		public cb_cards0:Laya.CheckBox;
		public box_cards1:Laya.Box;
		public cb_cards1:Laya.CheckBox;
		public box_cards2:Laya.Box;
		public cb_cards2:Laya.CheckBox;
		public box_cards3:Laya.Box;
		public cb_cards3:Laya.CheckBox;
		public txt_info:laya.display.Text;
		public box_qiang:Laya.Box;
		public box_qiang0:Laya.Box;
		public cb_qiang0:Laya.CheckBox;
		public box_qiang1:Laya.Box;
		public cb_qiang1:Laya.CheckBox;
		public box_first:Laya.Box;
		public box_first0:Laya.Box;
		public cb_first0:Laya.CheckBox;
		public box_first1:Laya.Box;
		public cb_first1:Laya.CheckBox;
		public box_shun:Laya.Box;
		public box_shun0:Laya.Box;
		public cb_shun0:Laya.CheckBox;
		public box_shun1:Laya.Box;
		public cb_shun1:Laya.CheckBox;
		public box_other:Laya.Box;
		public box_other0:Laya.Box;
		public cb_other0:Laya.CheckBox;
		public box_other1:Laya.Box;
		public cb_other1:Laya.CheckBox;
		public box_other2:Laya.Box;
		public cb_other2:Laya.CheckBox;
		public box_other3:Laya.Box;
		public cb_other3:Laya.CheckBox;
		public box_money:Laya.Box;
		public txt_money:laya.display.Text;
		public box_create:Laya.Box;
		public btn_create:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"scaleY":1.25,"scaleX":1.25,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"width":789,"height":511},"child":[{"type":"Image","props":{"width":393,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"109,72,214,72","height":531}},{"type":"Image","props":{"y":0,"x":785,"width":393,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"109,72,214,72","scaleX":-1,"height":531}},{"type":"Button","props":{"y":37,"x":738,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"x":298,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_cjfj.png","centerX":0}},{"type":"Image","props":{"y":35,"x":398,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Panel","props":{"y":74,"x":19,"width":747,"var":"panel_para","height":326},"child":[{"type":"Box","props":{"y":12,"x":11,"var":"box_round"},"child":[{"type":"Text","props":{"width":139,"text":"选择局数：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Box","props":{"y":36,"x":8,"var":"box_round0"},"child":[{"type":"CheckBox","props":{"var":"cb_round0","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":57,"var":"txt_round0","text":"5局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":163,"var":"box_round1"},"child":[{"type":"CheckBox","props":{"var":"cb_round1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"var":"txt_round1","text":"10局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":323,"var":"box_round2"},"child":[{"type":"CheckBox","props":{"var":"cb_round2","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"var":"txt_round2","text":"15局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":482,"var":"box_round3"},"child":[{"type":"CheckBox","props":{"var":"cb_round3","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"var":"txt_round3","text":"20局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]}]},{"type":"Box","props":{"y":85,"x":11,"var":"box_pay"},"child":[{"type":"Text","props":{"width":139,"text":"支付方式：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"},"child":[{"type":"Radio","props":{"visible":false,"label":"label"}}]},{"type":"Box","props":{"y":36,"x":8,"var":"box_pay0"},"child":[{"type":"CheckBox","props":{"var":"cb_pay0","stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":84,"var":"txt_pay0","text":"房主付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":163,"visible":false,"var":"box_pay1"},"child":[{"type":"CheckBox","props":{"var":"cb_pay1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":84,"var":"txt_pay1","text":"AA付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]}]},{"type":"Box","props":{"y":161,"x":11,"var":"box_player"},"child":[{"type":"Text","props":{"width":139,"text":"选择人数：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Box","props":{"y":36,"x":8,"var":"box_player0"},"child":[{"type":"CheckBox","props":{"var":"cb_player0","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":49,"text":"3人","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":163,"var":"box_player1"},"child":[{"type":"CheckBox","props":{"var":"cb_player1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"text":"4人","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]}]},{"type":"Box","props":{"y":233,"x":11,"var":"box_cards"},"child":[{"type":"Text","props":{"width":139,"text":"选择玩法：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Box","props":{"y":36,"x":8,"var":"box_cards0"},"child":[{"type":"CheckBox","props":{"var":"cb_cards0","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":58,"text":"16张","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":163,"var":"box_cards1"},"child":[{"type":"CheckBox","props":{"var":"cb_cards1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"text":"15张","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":323,"var":"box_cards2"},"child":[{"type":"CheckBox","props":{"var":"cb_cards2","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"text":"13张","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":482,"var":"box_cards3"},"child":[{"type":"CheckBox","props":{"var":"cb_cards3","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"text":"12张","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Text","props":{"y":66,"x":251,"wordWrap":true,"width":220,"var":"txt_info","text":"去掉大小王、3个2、3个A、1个K","leading":6,"height":19,"fontSize":15,"font":"SimHei","color":"#9794c1","align":"center"}}]},{"type":"Box","props":{"y":304,"x":11,"var":"box_qiang"},"child":[{"type":"Text","props":{"width":139,"text":"选择抢关：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"},"child":[{"type":"Radio","props":{"visible":false,"label":"label"}}]},{"type":"Box","props":{"y":36,"x":8,"var":"box_qiang0"},"child":[{"type":"CheckBox","props":{"var":"cb_qiang0","stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":84,"text":"抢关","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":163,"visible":true,"var":"box_qiang1"},"child":[{"type":"CheckBox","props":{"var":"cb_qiang1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":84,"text":"不抢","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]}]},{"type":"Box","props":{"y":376,"x":11,"var":"box_first"},"child":[{"type":"Text","props":{"width":139,"text":"选择先出：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"},"child":[{"type":"Radio","props":{"visible":false,"label":"label"}}]},{"type":"Box","props":{"y":36,"x":8,"var":"box_first0"},"child":[{"type":"CheckBox","props":{"var":"cb_first0","stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":84,"text":"黑桃3","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":163,"visible":true,"var":"box_first1"},"child":[{"type":"CheckBox","props":{"var":"cb_first1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":209,"text":"赢家(首局黑桃3)","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Text","props":{"y":67,"x":254,"width":220,"text":"先出可以任意出牌","leading":6,"height":19,"fontSize":15,"font":"SimHei","color":"#9794c1","align":"center"}}]},{"type":"Box","props":{"y":461,"x":11,"var":"box_shun"},"child":[{"type":"Text","props":{"width":139,"text":"顺子张数：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"},"child":[{"type":"Radio","props":{"visible":false,"label":"label"}}]},{"type":"Box","props":{"y":36,"x":8,"var":"box_shun0"},"child":[{"type":"CheckBox","props":{"var":"cb_shun0","stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":114,"text":"5张起顺","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":163,"visible":true,"var":"box_shun1"},"child":[{"type":"CheckBox","props":{"var":"cb_shun1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":209,"text":"6张起顺","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]}]},{"type":"Box","props":{"y":536,"x":11,"var":"box_other"},"child":[{"type":"Text","props":{"width":139,"text":"其他规则：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Box","props":{"y":36,"x":8,"var":"box_other0"},"child":[{"type":"CheckBox","props":{"var":"cb_other0","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png","mouseEnabled":false}},{"type":"Text","props":{"y":0,"x":40,"width":104,"text":"必须管上","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":163,"var":"box_other1"},"child":[{"type":"CheckBox","props":{"var":"cb_other1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png","mouseEnabled":false}},{"type":"Text","props":{"y":0,"x":40,"width":104,"text":"报单保底","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":323,"var":"box_other2"},"child":[{"type":"CheckBox","props":{"var":"cb_other2","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png","mouseEnabled":false}},{"type":"Text","props":{"y":0,"x":40,"width":104,"text":"四带三","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":36,"x":482,"var":"box_other3"},"child":[{"type":"CheckBox","props":{"var":"cb_other3","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png","mouseEnabled":false}},{"type":"Text","props":{"y":0,"x":40,"width":104,"text":"3A为炸弹","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]}]}]},{"type":"Box","props":{"y":438,"x":584,"var":"box_money"},"child":[{"type":"Text","props":{"y":4,"wordWrap":true,"width":80,"text":"消耗：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Text","props":{"y":5,"x":117,"wordWrap":true,"width":80,"var":"txt_money","text":"0","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":18,"x":94,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":456,"x":394,"width":239,"var":"box_create","height":85,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":1,"x":0,"var":"btn_create","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cj.png"}},{"type":"Image","props":{"y":23,"x":71,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cj1.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.FangKa_ChuangJianUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai {
    export class JieSuan_FangKaUI extends View {
		public ani2:Laya.FrameAnimation;
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;
		public btn_create_room:Laya.Button;
		public btn_back_hud:Laya.Button;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Box","props":{"width":726,"height":527,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":154,"x":359,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"y":294,"x":363,"width":700,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk1.png","sizeGrid":"89,49,71,39","height":350,"centerY":30,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":74,"x":363,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":363,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":112,"x":349,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":423,"x":367,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"5S后开始第1局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffff96","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":183,"x":20,"width":681,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png","sizeGrid":"0,176,0,164","height":38}},{"type":"Label","props":{"y":204,"x":138,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":254,"wordWrap":true,"width":63,"text":"倍数","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":365,"wordWrap":true,"width":82,"text":"剩余牌数","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":493,"wordWrap":true,"width":63,"text":"积分","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":227,"x":18,"width":683,"var":"list_settle","spaceY":8,"repeatY":4,"height":180},"child":[{"type":"JieSuanRender2","props":{"name":"render","runtime":"ui.dzqp.game_ui.tongyong.JieSuanRender2UI"}}]},{"type":"Label","props":{"y":204,"x":610,"wordWrap":true,"width":84,"text":"累计积分","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":494,"x":218,"width":200,"visible":false,"var":"btn_create_room","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"创建房间","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":494,"x":508,"width":200,"visible":false,"var":"btn_back_hud","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#397119","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"返回大厅","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.JieSuanRender2UI",ui.dzqp.game_ui.tongyong.JieSuanRender2UI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.JieSuan_FangKaUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai {
    export class PaoDeKuaiUI extends View {
		public box_view:Laya.Box;
		public text_cardroomid:Laya.Label;
		public img_tishi0:Laya.Image;
		public box_player0:Laya.Box;
		public view_player0:ui.dzqp.game_ui.paodekuai.component.TouXiangUI;
		public img_first0:Laya.Image;
		public img_quanguan0:Laya.Image;
		public text_round:Laya.Label;
		public box_player1:Laya.Box;
		public view_player1:ui.dzqp.game_ui.paodekuai.component.TouXiangUI;
		public box_count1:Laya.Box;
		public lab_count1:Laya.Label;
		public img_first1:Laya.Image;
		public img_tishi1:Laya.Image;
		public img_type1:Laya.Image;
		public img_quanguan1:Laya.Image;
		public view_baodan1:ui.dzqp.game_ui.paodekuai.component.BaoDanUI;
		public box_player2:Laya.Box;
		public view_player2:ui.dzqp.game_ui.paodekuai.component.TouXiangUI;
		public box_count2:Laya.Box;
		public lab_count2:Laya.Label;
		public img_first2:Laya.Image;
		public img_tishi2:Laya.Image;
		public img_type2:Laya.Image;
		public img_quanguan2:Laya.Image;
		public view_baodan2:ui.dzqp.game_ui.paodekuai.component.BaoDanUI;
		public box_player3:Laya.Box;
		public view_player3:ui.dzqp.game_ui.paodekuai.component.TouXiangUI;
		public box_count3:Laya.Box;
		public lab_count3:Laya.Label;
		public img_first3:Laya.Image;
		public img_tishi3:Laya.Image;
		public img_type3:Laya.Image;
		public img_quanguan3:Laya.Image;
		public view_baodan3:ui.dzqp.game_ui.paodekuai.component.BaoDanUI;
		public view_cardroom:ui.dzqp.game_ui.tongyong.FangKa_GoUI;
		public box_btn:Laya.Box;
		public btn_tishi:Laya.Button;
		public img_tishi:Laya.Image;
		public btn_pass:Laya.Button;
		public img_pass:Laya.Image;
		public btn_chupai:Laya.Button;
		public img_chupai:Laya.Image;
		public box_qiang:Laya.Box;
		public btn_qiang:Laya.Button;
		public btn_buqiang:Laya.Button;
		public view_time:ui.dzqp.game_ui.tongyong.DaoJiShiUI;
		public img_type0:Laya.Image;
		public lab_per:Laya.Label;
		public btn_tuoguan:Laya.Button;
		public view_xipai:ui.dzqp.game_ui.tongyong.effect.XiPaiUI;
		public view_paixie:ui.dzqp.game_ui.tongyong.PaiXeiUI;
		public view_fapai:ui.dzqp.game_ui.tongyong.FaPaiUI;
		public btn_menu:Laya.Button;
		public btn_back:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_cardtype:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;
		public btn_qifu:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":238,"x":510,"width":260,"var":"text_cardroomid","text":"房间号：","height":41,"fontSize":35,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":423,"var":"img_tishi0","skin":"paodekuai_ui/game_ui/paodekuai/tu_buyao.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":540,"x":32,"var":"box_player0"},"child":[{"type":"TouXiang","props":{"y":12,"x":0,"width":100,"var":"view_player0","height":138,"runtime":"ui.dzqp.game_ui.paodekuai.component.TouXiangUI"}},{"type":"Image","props":{"y":0.5,"x":85,"var":"img_first0","skin":"paodekuai_ui/game_ui/paodekuai/tu_xian.png","pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":13,"x":-8,"var":"img_quanguan0","skin":"paodekuai_ui/game_ui/paodekuai/effect/quanguan/img_guanguan.png"}}]},{"type":"Label","props":{"y":57,"x":89,"width":268,"var":"text_round","text":"局数：","height":24,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":179,"x":913,"width":353,"var":"box_player1","height":155},"child":[{"type":"TouXiang","props":{"y":16.5,"x":247,"var":"view_player1","runtime":"ui.dzqp.game_ui.paodekuai.component.TouXiangUI"}},{"type":"Box","props":{"y":79.5,"x":174,"width":53,"var":"box_count1","height":73},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.5,"scaleX":0.5}},{"type":"Label","props":{"y":37,"x":26,"wordWrap":true,"width":46,"var":"lab_count1","text":"00","overflow":"visible","leading":6,"height":42,"fontSize":36,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":0.5,"x":232,"var":"img_first1","skin":"paodekuai_ui/game_ui/paodekuai/tu_xian.png","pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":65,"var":"img_tishi1","skin":"paodekuai_ui/game_ui/paodekuai/tu_buyao.png","centerX":-60,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":102,"x":44,"var":"img_type1","skin":"paodekuai_ui/game_ui/paodekuai/px_3.png"}},{"type":"Image","props":{"y":18,"x":239,"var":"img_quanguan1","skin":"paodekuai_ui/game_ui/paodekuai/effect/quanguan/img_guanguan.png"}},{"type":"BaoDan","props":{"y":117,"x":199,"var":"view_baodan1","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.paodekuai.component.BaoDanUI"}}]},{"type":"Box","props":{"y":18,"x":475,"width":371,"var":"box_player2","height":154},"child":[{"type":"TouXiang","props":{"y":16,"x":1,"var":"view_player2","runtime":"ui.dzqp.game_ui.paodekuai.component.TouXiangUI"}},{"type":"Box","props":{"y":79,"x":121,"width":53,"var":"box_count2","height":73},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.5,"scaleX":0.5}},{"type":"Label","props":{"y":37,"x":26,"wordWrap":true,"width":46,"var":"lab_count2","text":"00","overflow":"visible","leading":6,"height":42,"fontSize":36,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":1,"x":84,"var":"img_first2","skin":"paodekuai_ui/game_ui/paodekuai/tu_xian.png","pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":65,"var":"img_tishi2","skin":"paodekuai_ui/game_ui/paodekuai/tu_buyao.png","centerX":44,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":106,"x":205,"var":"img_type2","skin":"paodekuai_ui/game_ui/paodekuai/px_3.png"}},{"type":"Image","props":{"y":18,"x":-6,"var":"img_quanguan2","skin":"paodekuai_ui/game_ui/paodekuai/effect/quanguan/img_guanguan.png"}},{"type":"BaoDan","props":{"y":118,"x":146,"var":"view_baodan2","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.paodekuai.component.BaoDanUI"}}]},{"type":"Box","props":{"y":179,"x":7,"width":295,"var":"box_player3","height":155},"child":[{"type":"TouXiang","props":{"y":16.5,"x":19,"var":"view_player3","runtime":"ui.dzqp.game_ui.paodekuai.component.TouXiangUI"}},{"type":"Box","props":{"y":79.5,"x":138,"width":53,"var":"box_count3","height":73},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.5,"scaleX":0.5}},{"type":"Label","props":{"y":37,"x":26,"wordWrap":true,"width":46,"var":"lab_count3","text":"00","overflow":"visible","leading":6,"height":42,"fontSize":36,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":0.5,"x":102,"var":"img_first3","skin":"paodekuai_ui/game_ui/paodekuai/tu_xian.png","pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":67,"var":"img_tishi3","skin":"paodekuai_ui/game_ui/paodekuai/tu_buyao.png","centerX":100,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":103,"x":222,"var":"img_type3","skin":"paodekuai_ui/game_ui/paodekuai/px_3.png"}},{"type":"Image","props":{"y":19,"x":11,"var":"img_quanguan3","skin":"paodekuai_ui/game_ui/paodekuai/effect/quanguan/img_guanguan.png"}},{"type":"BaoDan","props":{"y":116,"x":164,"var":"view_baodan3","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.paodekuai.component.BaoDanUI"}}]},{"type":"FangKa_Go","props":{"y":0,"x":0,"visible":false,"var":"view_cardroom","runtime":"ui.dzqp.game_ui.tongyong.FangKa_GoUI"}},{"type":"Box","props":{"y":494,"width":508,"var":"box_btn","height":57,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":29,"x":81,"var":"btn_tishi","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"提示","centerX":-173,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":29,"var":"img_tishi","skin":"tongyong_ui/game_ui/tongyong/general/tu_btnhh.png","centerX":-173,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29,"var":"btn_pass","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelFont":"Arial","labelColors":"#ffffff","labelBold":true,"label":"过","centerX":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":29,"var":"img_pass","skin":"tongyong_ui/game_ui/tongyong/general/tu_btnhh.png","centerX":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29,"x":429,"var":"btn_chupai","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","labelStrokeColor":"#289e3b","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelFont":"SimSun","labelColors":"#ffffff","labelBold":true,"label":"出牌","centerX":175,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":29,"x":429,"var":"img_chupai","skin":"tongyong_ui/game_ui/tongyong/general/tu_btnhh.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":494,"width":436,"var":"box_qiang","height":57,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":29.5,"var":"btn_qiang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"我抢","centerX":-143,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":29.5,"var":"btn_buqiang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","labelStrokeColor":"#289e3b","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"不抢","centerX":142,"anchorY":0.5,"anchorX":0.5}}]},{"type":"DaoJiShi","props":{"y":430,"x":640,"var":"view_time","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Image","props":{"y":412,"x":586,"var":"img_type0","skin":"paodekuai_ui/game_ui/paodekuai/px_3.png"}},{"type":"Label","props":{"y":27,"x":88,"width":133,"var":"lab_per","text":"倍数：","height":28,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":638,"x":1189,"var":"btn_tuoguan","stateNum":1,"skin":"paodekuai_ui/game_ui/paodekuai/btn_tg0.png","right":50,"bottom":50,"anchorY":0.5,"anchorX":0.5}},{"type":"XiPai","props":{"y":310,"x":640,"var":"view_xipai","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.effect.XiPaiUI"}},{"type":"PaiXei","props":{"y":90,"x":968,"var":"view_paixie","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.PaiXeiUI"}},{"type":"FaPai","props":{"y":94,"x":907,"var":"view_fapai","runtime":"ui.dzqp.game_ui.tongyong.FaPaiUI"}}]},{"type":"Button","props":{"y":52,"x":47,"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":52,"x":1234,"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":0,"x":10,"width":180,"var":"img_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":293,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":74,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":216,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":145,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":86,"x":14,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":16,"x":14,"var":"btn_cardtype","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":227,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":157,"x":14,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"y":62,"x":1169,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.paodekuai.component.TouXiangUI",ui.dzqp.game_ui.paodekuai.component.TouXiangUI);
			View.regComponent("ui.dzqp.game_ui.paodekuai.component.BaoDanUI",ui.dzqp.game_ui.paodekuai.component.BaoDanUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.FangKa_GoUI",ui.dzqp.game_ui.tongyong.FangKa_GoUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.DaoJiShiUI",ui.dzqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.effect.XiPaiUI",ui.dzqp.game_ui.tongyong.effect.XiPaiUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.PaiXeiUI",ui.dzqp.game_ui.tongyong.PaiXeiUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.FaPaiUI",ui.dzqp.game_ui.tongyong.FaPaiUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.PaoDeKuaiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai {
    export class PaoDeKuai_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public btn_tab:Laya.Tab;
		public panel_jianjie:Laya.Panel;
		public panel_type:Laya.Panel;
		public panel_wanfa:Laya.Panel;
		public panel_qiangguan:Laya.Panel;
		public panel_jiesuan:Laya.Panel;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"scaleY":1.25,"scaleX":1.25,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png"}},{"type":"Image","props":{"y":0,"x":785,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png","scaleX":-1}},{"type":"Image","props":{"y":29,"x":394,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":37,"x":394,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":743,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":66,"x":15,"width":756,"var":"btn_tab","space":4,"skin":"tongyong_ui/game_ui/tongyong/hud/tab_bq.png","labels":"游戏简介,合法牌型,特殊玩法,抢关功能,游戏结算","labelSize":20,"labelColors":"#cacaca,#cacaca,#ffffff","height":58}},{"type":"Panel","props":{"y":130,"x":20,"width":750,"var":"panel_jianjie","height":355},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"paodekuai_ui/game_ui/paodekuai/guize_1.png"}}]},{"type":"Panel","props":{"y":130,"x":20,"width":750,"var":"panel_type","height":355},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"paodekuai_ui/game_ui/paodekuai/guize_2.png"}}]},{"type":"Panel","props":{"y":130,"x":20,"width":750,"var":"panel_wanfa","height":355},"child":[{"type":"Image","props":{"y":2,"x":-1,"skin":"paodekuai_ui/game_ui/paodekuai/guize_3.png"}}]},{"type":"Panel","props":{"y":130,"x":20,"width":750,"var":"panel_qiangguan","height":355},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"paodekuai_ui/game_ui/paodekuai/guize_4.png"}}]},{"type":"Panel","props":{"y":130,"x":20,"width":750,"var":"panel_jiesuan","height":355},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"paodekuai_ui/game_ui/paodekuai/guize_5.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.PaoDeKuai_GuiZeUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.paodekuai {
    export class PaoDeKuai_HUDUI extends View {
		public img_mn:Laya.Image;
		public view_hud:ui.dzqp.game_ui.tongyong.HudUI;
		public box_normal:Laya.Box;
		public box_right:Laya.Box;
		public img_room0:Laya.Image;
		public lab_least0:Laya.Label;
		public lab_money0:Laya.Label;
		public img_room1:Laya.Image;
		public lab_least1:Laya.Label;
		public lab_money1:Laya.Label;
		public img_room2:Laya.Image;
		public lab_least2:Laya.Label;
		public lab_money2:Laya.Label;
		public img_room3:Laya.Image;
		public lab_money3:Laya.Label;
		public lab_least3:Laya.Label;
		public box_roomcard:Laya.Box;
		public img_room_create:Laya.Image;
		public img_room_join:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"top":24,"height":720,"centerX":0},"child":[{"type":"Image","props":{"top":-1,"skin":"paodekuai_ui/game_ui/paodekuai/zjh.jpg","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"y":360,"var":"img_mn","skin":"paodekuai_ui/game_ui/paodekuai/zjh_rw.png","left":-100,"bottom":0,"anchorY":0.5}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.dzqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"y":40,"x":40,"width":910,"var":"box_normal","top":0,"right":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":900,"var":"box_right","height":465,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":112,"var":"img_room0","skin":"tongyong_ui/game_ui/tongyong/hud/difen_00.png","right":610,"name":"item0","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":59,"x":133,"wordWrap":true,"width":140,"var":"lab_least0","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":105,"x":133,"wordWrap":true,"width":196,"var":"lab_money0","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#122452","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":352,"var":"img_room1","skin":"tongyong_ui/game_ui/tongyong/hud/difen_01.png","right":610,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":58,"x":133,"wordWrap":true,"width":140,"var":"lab_least1","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":103,"x":133,"wordWrap":true,"width":196,"var":"lab_money1","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#361147","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room2","skin":"tongyong_ui/game_ui/tongyong/hud/difen_02.png","right":330,"name":"item2","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":150,"x":135,"skin":"paodekuai_ui/game_ui/paodekuai/difen_03_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":298,"x":135,"wordWrap":true,"width":140,"var":"lab_least2","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":343,"x":135,"wordWrap":true,"width":196,"var":"lab_money2","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#0a4121","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room3","skin":"tongyong_ui/game_ui/tongyong/hud/difen_03.png","right":50,"name":"item3","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":131,"x":135,"skin":"paodekuai_ui/game_ui/paodekuai/difen_04_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":343,"x":137,"wordWrap":true,"width":196,"var":"lab_money3","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#5d360d","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":298,"x":136,"wordWrap":true,"width":140,"var":"lab_least3","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]},{"type":"Image","props":{"top":24,"skin":"paodekuai_ui/game_ui/paodekuai/ddz_title.png","scaleY":1,"scaleX":1,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":20,"x":20,"width":910,"visible":false,"var":"box_roomcard","top":0,"right":0,"mouseThrough":true,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":900,"right":0,"height":465,"centerY":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":232,"var":"img_room_create","skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka.png","right":421,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":43,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka2.png"}}]},{"type":"Image","props":{"y":232,"var":"img_room_join","skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka1.png","right":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":39,"x":83,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka3.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.HudUI",ui.dzqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.paodekuai.PaoDeKuai_HUDUI.uiView);
        }
    }
}

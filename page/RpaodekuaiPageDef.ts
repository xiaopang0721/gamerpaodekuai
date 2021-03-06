/**
* 跑得快 
*/
module gamerpaodekuai.page {
	export class RpaodekuaiPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//界面
		static PAGE_PDK_MAP: string = "2";		//地图界面
		static PAGE_PDK_RULE: string = "101";		//规则界面
		static PAGE_PDK_CARDROOM_SETTLE: string = "10";	// 房卡结算页
		static myinit(str: string) {
			super.myinit(str);
			PaodekuaiClip.init();
			PageDef._pageClassMap[RpaodekuaiPageDef.PAGE_PDK_MAP] = RpaodekuaiMapPage;
			PageDef._pageClassMap[RpaodekuaiPageDef.PAGE_PDK_RULE] = RpaodekuaiRulePage;
			PageDef._pageClassMap[RpaodekuaiPageDef.PAGE_PDK_CARDROOM_SETTLE] = RpaodekuaiRoomSettlePage;


			this["__needLoadAsset"] = [
				Path_game_rpaodekuai.atlas_game_ui + "paodekuai.atlas",
				Path_game_rpaodekuai.atlas_game_ui_pdk + "qipai.atlas",
				Path_game_rpaodekuai.atlas_game_ui_pdk_effect + "quanguan.atlas",
				Path_game_rpaodekuai.atlas_game_ui_pdk_effect + "feiji.atlas",
				Path_game_rpaodekuai.atlas_game_ui_pdk_effect + "boom.atlas",
				Path_game_rpaodekuai.atlas_game_ui_pdk_effect + "jiesuan.atlas",
				Path_game_rpaodekuai.atlas_game_ui_pdk_effect + "px.atlas",
				Path_game_rpaodekuai.atlas_game_ui_pdk_effect + "qgsb.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "fk.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "jiaru.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "ksyx.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "yq.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "js.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",

				Path.custom_atlas_scene + 'card.atlas',
				Path.map + 'pz_rpaodekuai.png',
				Path.map_far + 'bg_rpaodekuai.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_rpaodekuai.music_paodekuai + "baozha.mp3",
					Path_game_rpaodekuai.music_paodekuai + "chupai.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_2.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_3.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_4.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_5.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_6.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_7.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_8.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_9.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_10.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_11.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_12.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_13.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_1_14.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_2.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_3.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_4.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_5.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_6.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_7.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_8.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_9.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_10.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_11.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_12.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_13.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_2_14.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_3.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_4.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_5.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_6.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_7.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_8.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_pass1.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_pass2.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_pass3.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_pass4.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_yizhang.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_buqiang.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nan_woqiang.mp3",
					Path_game_rpaodekuai.music_paodekuai + "pdk_BGM.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_2.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_3.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_4.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_5.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_6.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_7.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_8.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_9.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_10.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_11.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_12.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_13.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_1_14.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_2.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_3.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_4.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_5.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_6.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_7.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_8.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_9.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_10.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_11.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_12.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_13.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_2_14.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_3.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_4.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_5.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_6.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_7.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_8.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_pass1.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_pass2.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_pass3.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_pass4.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_yizhang.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_buqiang.mp3",
					Path_game_rpaodekuai.music_paodekuai + "nv_woqiang.mp3",
				])
			}
			this["__roomcard"] = Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM;
		}
	}
}
/**
* 跑得快
*/
module gamerpaodekuai.manager {
	export const enum CARD_TYPE {
		CARDS_TYPE_WUXIAO = 0, //无效牌
		CARDS_TYPE_DAN = 1, //单张
		CARDS_TYPE_DUI = 2, //对子
		CARDS_TYPE_SAN = 3, //三带二
		CARDS_TYPE_SHUN = 4, //顺子
		CARDS_TYPE_BOMB = 5, //炸弹
		CARDS_TYPE_LIANDUI = 6, //连对
		CARDS_TYPE_TWO_FEIJI = 7, //两连飞机
		CARDS_TYPE_SIDAISAN = 8, //四带三
		CARDS_TYPE_THREE_FEIJI = 9, //三连飞机
		CARDS_TYPE_FOUR_FEIJI = 10, //四连飞机
	}
	const MIN_CHECKTIME: number = 1000;//最小检测时间间隔(毫秒)

	export class RpaodekuaiMgr extends gamecomponent.managers.PlayingCardMgrBase<RpaodekuaiData>{
		public isReLogin: boolean;		//是否断线重连，各种判断操作用的
		public isShowCards: boolean = false;	//是否翻牌
		public allCards: any = [];	//主玩家手牌
		public otherCards: any = [];//其他玩家手牌
		public maxCardVal: number = 0;	//所选牌型最大牌值
		public shunziCount: number = 5;	//几张起顺
		public bombA: number = 0;	//3A是否炸弹
		public siDaiSan: number = 1;	//是否可以四带三
		public baodi: number = 1;	//报单

		static readonly MAPINFO_OFFLINE: string = "PaodekuaiMgr.MAPINFO_OFFLINE";//假精灵
		static readonly DEAL_CARDS: string = "PaodekuaiMgr.DEAL_CARDS";//发牌结束
		static readonly WXSHARE_TITLE = "跑得快]房号:{0}";	// 分享标题
		static readonly WXSHARE_DESC = "开好房喽,就等你们一起来玩跑得快啦!晚了位置就没了哟~";	// 分享内容

		private _offsetTime: number//剩余检测时间(毫秒)
		private _unitOffline: UnitOffline;//假精灵信息
		private _cardsTemp: any = [[], [], [], []];	//玩家出牌数据
		private _isReDealCard: boolean = false;
		private _totalUnitCount: number = 3;	// 玩家数量
		private _centerPosTemp = [640, 450, 36];	//主玩家出牌中间那张牌的位置
		private _centerPlayPosTemp = [670, 625, 50];	//主玩家手牌中间那张牌的位置
		private _playCardsPos1 = [[1040, 360, -22], [700, 170, 22], [240, 360, 22]];	//其他人出牌第一张位置,4人场
		private _playCardsPos2 = [[1040, 360, -22], [240, 360, 22]];	//其他人出牌第一张位置,3人场
		private _playFaPaiPos1 = [[169, 372], [1106, 375], [623, 186]];//其他人发牌位置，4人场
		private _playFaPaiPos2 = [[169, 372], [1106, 375]];//其他人发牌位置，3人场

		constructor(game: Game) {
			super(game);
		}

		get unitOffline() {
			return this._unitOffline;
		}

		set unitOffline(v) {
			this._unitOffline = v;
			this.event(RpaodekuaiMgr.MAPINFO_OFFLINE)
		}

		get isReDealCard() {
			return this._isReDealCard;
		}

		set isReDealCard(v) {
			this._isReDealCard = v;
		}

		get totalUnitCount() {
			return this._totalUnitCount;
		}

		set totalUnitCount(v: number) {
			this._totalUnitCount = v;
		}

		//重新初始化牌
		Init(all_val: Array<number>, create_fun: Handler): void {
			this._cards.length = 0;
			for (let i: number = 0; i < all_val.length; i++) {
				let card: RpaodekuaiData;
				card = create_fun.run();
				card.Init(all_val[i]);
				card.index = i;
				this._cards.push(card)
			}
			create_fun.recover();
			create_fun = null;
		}

		//心跳更新
		update(diff: number) {
			if (this._offsetTime > 0) {
				this._offsetTime -= diff;
				return;
			}
			this._offsetTime = MIN_CHECKTIME;
		}

		//判断对子
		private isDuiZi(cards: any): boolean {
			if (cards.length != 2) return false;
			if (cards[0].GetCardVal() != cards[1].GetCardVal()) return false;
			this.maxCardVal = cards[0].GetCardVal();
			return true;
		}

		//判断3带2
		private isSanDaiEr(cards: any): boolean {
			if (this.allCards.length >= 5) {
				if (cards.length != 5) return false;
			} else {
				if (cards.length != this.allCards.length) return false;
				if (this.allCards.length < 3) return false;
			}
			let copyCards = [];
			this.copyTalbe(cards, copyCards);
			let temp = this.findSomeCards(copyCards, 3);
			if (temp.length != 3) return false;
			this.maxCardVal = temp[0].GetCardVal();
			return true;
		}

		//判断顺子
		private isShunZi(cards: any): boolean {
			let copyCards = [];
			this.copyTalbe(cards, copyCards);
			if (copyCards[0].GetCardVal() == 14) {
				return false;
			}
			if (copyCards.length < this.shunziCount) return false;
			let val1 = copyCards[0].GetCardVal();
			for (let i = 1; i < copyCards.length; i++) {
				let val2 = copyCards[i].GetCardVal();
				if (val2 + 1 != val1) return false;
				val1 = val2;
			}
			this.maxCardVal = copyCards[0].GetCardVal();
			return true;
		}

		//判断炸弹
		private isBomb(cards: any): boolean {
			//特殊牌3A是不是炸弹
			if (this.bombA == 1) {
				if (cards[0].GetCardVal() == 13) {
					if (cards.length != 3) return false;
				} else {
					if (cards.length != 4) return false;
				}
			} else {
				if (cards.length != 4) return false;
			}
			if (cards[0].GetCardVal() != cards[cards.length - 1].GetCardVal()) return false;
			this.maxCardVal = cards[0].GetCardVal();
			return true;
		}

		//判断连对
		private isLianDui(cards: any): boolean {
			if (cards.length < 4) return false;
			if (cards.length % 2 != 0) return false;
			if (cards[0].GetCardVal() == 14) {
				return false;
			}
			let val1 = cards[0].GetCardVal();
			for (let i = 1; i < cards.length / 2; i++) {
				let val2 = cards[i * 2].GetCardVal();
				if (val2 + 1 != val1) return false;
				val1 = val2;
			}
			for (let i = 0; i < cards.length / 2; i++) {
				if (cards[i * 2].GetCardVal() != cards[i * 2 + 1].GetCardVal()) return false;
			}
			this.maxCardVal = cards[0].GetCardVal();
			return true;
		}

		//判断两连飞机
		private isTwoFeiJi(cards): boolean {
			if (this.allCards.length >= 10) {
				//不是可以全出状态,如果不是10张飞机带翅膀或者6张的三顺
				if (cards.length != 10 && cards.length != 6) return false;
			} else {
				//可以全出状态
				if (cards.length != this.allCards.length) return false;
				if (this.allCards.length < 6) return false;
			}
			let copyCards = [];
			this.copyTalbe(cards, copyCards);
			//先干掉2
			let exist: boolean = true;
			while (exist) {
				if (copyCards[0].GetCardVal() == 14) {
					copyCards.splice(0, 1);
				}
				if (copyCards[0].GetCardVal() == 14) {
					exist = true;
				} else {
					exist = false;
				}
			}
			let temp1 = this.findSomeCards(copyCards, 3);
			if (temp1.length < 3) return false;
			let temp2 = this.findSomeCards(copyCards, 3);
			if (temp2.length < 3) return false;
			//已经有2个3张了,看看其他几张的牌
			let temp3 = this.findSomeCards(copyCards, 3);
			//如果还存在一个3张，那就要看看哪两个可以凑成飞机
			if (temp3.length < 3) {
				if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal()) {
					this.maxCardVal = temp1[0].GetCardVal();
					return true;
				}
			} else {
				//三个三张 还有一个单支 如果不是全出的话，这时候是不能出的
				if (copyCards.length == 1 && this.allCards.length != cards.length) return false;
				if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal()) {
					this.maxCardVal = temp1[0].GetCardVal();
					return true;
				} else if (temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()) {
					this.maxCardVal = temp2[0].GetCardVal();
					return true;
				}
			}
			return false;
		}

		//判断四带三
		private isSiDaiSan(cards: any): boolean {
			if (this.siDaiSan == 0) return false;
			if (this.allCards.length >= 7) {
				if (cards.length != 7) return false;
			} else {
				if (cards.length != this.allCards.length) return false;
				if (this.allCards.length < 5) return false;
			}
			let copyCards = [];
			this.copyTalbe(cards, copyCards);
			let temp = this.findSomeCards(copyCards, 4);
			if (temp.length != 4) return false;
			this.maxCardVal = temp[0].GetCardVal();
			return true;
		}

		//判断3连飞机
		private isThreeFeiJi(cards: any): boolean {
			if (this.allCards.length >= 15) {
				if (cards.length != 15 && cards.length != 9) return false;
			} else {
				if (cards.length != this.allCards.length) return false;
				if (this.allCards.length < 9) return false;
			}
			let copyCards = [];
			this.copyTalbe(cards, copyCards);
			//先干掉2
			let exist: boolean = true;
			while (exist) {
				if (copyCards[0].GetCardVal() == 14) {
					copyCards.splice(0, 1);
				}
				if (copyCards[0].GetCardVal() == 14) {
					exist = true;
				} else {
					exist = false;
				}
			}
			//需要至少3个3张
			let temp1 = this.findSomeCards(copyCards, 3);
			if (temp1.length < 3) return false;
			let temp2 = this.findSomeCards(copyCards, 3);
			if (temp2.length < 3) return false;
			let temp3 = this.findSomeCards(copyCards, 3);
			if (temp3.length < 3) return false;
			//剩下的牌里看下有没有3张
			let temp4 = this.findSomeCards(copyCards, 3);
			let temp5 = this.findSomeCards(copyCards, 3);
			if (temp4.length < 3) {
				//3个3张
				if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()) {
					this.maxCardVal = temp1[0].GetCardVal();
					return true;
				}
			} else {
				if (temp5.length < 3) {
					//有4个3张
					//剩余3张手牌 如果不是全出的话 不能出
					if (copyCards.length <= 3 && this.allCards.length != cards.length) return false;
					if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()) {
						this.maxCardVal = temp1[0].GetCardVal();
						return true;
					} else if (temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal() && temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()) {
						this.maxCardVal = temp2[0].GetCardVal();
						return true;
					}
				} else {
					//有5个3张
					if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()) {
						this.maxCardVal = temp1[0].GetCardVal();
						return true;
					} else if (temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal() && temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()) {
						this.maxCardVal = temp2[0].GetCardVal();
						return true;
					} else if (temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal() && temp4[0].GetCardVal() - 1 == temp5[0].GetCardVal()) {
						this.maxCardVal = temp3[0].GetCardVal();
						return true;
					}
				}
			}
			return false
		}

		//判断4连飞机
		private isFourFeiJi(cards: any): boolean {
			if (cards.length != this.allCards.length) return false;
			let copyCards = [];
			this.copyTalbe(cards, copyCards);
			//先干掉2
			let exist: boolean = true;
			while (exist) {
				if (copyCards[0].GetCardVal() == 14) {
					copyCards.splice(0, 1);
				}
				if (copyCards[0].GetCardVal() == 14) {
					exist = true;
				} else {
					exist = false;
				}
			}
			//需要至少3个3张
			let temp1 = this.findSomeCards(copyCards, 3);
			if (temp1.length < 3) return false;
			let temp2 = this.findSomeCards(copyCards, 3);
			if (temp2.length < 3) return false;
			let temp3 = this.findSomeCards(copyCards, 3);
			if (temp3.length < 3) return false;
			let temp4 = this.findSomeCards(copyCards, 3);
			if (temp4.length < 3) return false;
			//剩下的牌里看下有没有3张
			let temp5 = this.findSomeCards(copyCards, 3);
			if (temp5.length < 3) {
				if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()
					&& temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()) {
					this.maxCardVal = temp1[0].GetCardVal();
					return true;
				}
			} else {
				if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()
					&& temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()) {
					this.maxCardVal = temp1[0].GetCardVal();
					return true;
				} else if (temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal() && temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()
					&& temp4[0].GetCardVal() - 1 == temp5[0].GetCardVal()) {
					this.maxCardVal = temp2[0].GetCardVal();
					return true;
				}
			}
			return false
		}

		//找出一堆牌里N张一样的牌
		private findSomeCards(cards: any, count: number): any {
			let temp = [];
			if (cards.length < count) return temp;
			for (let i = 0; i < cards.length - 1; i++) {
				temp = [];
				let val = cards[i].GetCardVal();
				for (let k = 0; k < cards.length; k++) {
					if (cards[k].GetCardVal() == val) {
						temp.push(cards[k]);
					}
				}
				if (temp.length >= count) break;
			}
			if (temp.length >= count) {
				for (let i = 0; i < temp.length; i++) {
					for (let k = 0; k < cards.length; k++) {
						if (temp[i].GetVal() == cards[k].GetVal()) {
							cards.splice(k, 1);
							break;
						}
					}
				}
			} else {
				temp = [];
			}
			return temp;
		}

		//复制数组，1复制到2
		copyTalbe(temp1: any, temp2: any): void {
			for (let i = 0; i < temp1.length; i++) {
				temp2[i] = temp1[i];
			}
		}

		//检查一堆牌是什么类型的
		checkCardsType(cards): number {
			let cardLen = cards.length;
			if (cardLen == 0) return CARD_TYPE.CARDS_TYPE_WUXIAO;	//无效牌
			if (cardLen == 1) {
				this.maxCardVal = cards[0].GetCardVal();
				return CARD_TYPE.CARDS_TYPE_DAN;	//单张
			}
			let result: boolean = false;
			result = this.isDuiZi(cards);
			if (result) return CARD_TYPE.CARDS_TYPE_DUI;	//对子
			result = this.isSanDaiEr(cards);
			if (result) return CARD_TYPE.CARDS_TYPE_SAN;	//3带2
			result = this.isShunZi(cards);
			if (result) return CARD_TYPE.CARDS_TYPE_SHUN;	//顺子
			result = this.isBomb(cards);
			if (result) return CARD_TYPE.CARDS_TYPE_BOMB;	//炸弹
			result = this.isLianDui(cards);
			if (result) return CARD_TYPE.CARDS_TYPE_LIANDUI;	//连对
			result = this.isTwoFeiJi(cards);
			if (result) return CARD_TYPE.CARDS_TYPE_TWO_FEIJI;	//两连飞机
			result = this.isSiDaiSan(cards);
			if (result) return CARD_TYPE.CARDS_TYPE_SIDAISAN;	//四带三
			result = this.isThreeFeiJi(cards);
			if (result) return CARD_TYPE.CARDS_TYPE_THREE_FEIJI;	//三连飞机
			result = this.isFourFeiJi(cards);
			if (result) return CARD_TYPE.CARDS_TYPE_FOUR_FEIJI;	//四连飞机
			return CARD_TYPE.CARDS_TYPE_WUXIAO;
		}

		//从手牌里找所有顺子
		findShunZi(cards: any): any {
			let temp = [];
			let copyCards = [];
			this.copyTalbe(cards, copyCards);
			if (copyCards.length < this.shunziCount) return temp;
			//找完2张以上的牌，剩下的都是单张了
			let temp1 = this.findDuiZi(copyCards);
			let temp2 = [];
			for (let i = 0; i < temp1.length; i++) {
				temp2.push(temp1[i][0]);
			}
			//已经没有重复的牌了
			temp2 = temp2.concat(copyCards);
			this.SortCards(temp2);
			if (temp2[0].GetCardVal() == 14) {
				temp2.splice(0, 1);
			}
			while (temp2.length >= this.shunziCount) {
				let val = temp2[0].GetCardVal();
				let szTemp = [temp2[0]];
				for (let k = 1; k < temp2.length; k++) {
					if (temp2[k].GetCardVal() + 1 == val) {
						val = temp2[k].GetCardVal();
						szTemp.push(temp2[k]);
					} else {
						break;
					}
				}
				if (szTemp.length >= this.shunziCount) {
					temp.push(szTemp);
				}
				for (let i = 0; i < szTemp.length; i++) {
					for (let k = 0; k < temp2.length; k++) {
						if (szTemp[i].GetVal() == temp2[k].GetVal()) {
							temp2.splice(k, 1);
							break;
						}
					}
				}
			}
			return temp;
		}

		//从手牌里找所有2张以上
		findDuiZi(cards: any): any {
			let temp = [];
			if (cards.length < 2) return temp;
			let flag: boolean = true;
			while (flag) {
				let temp1 = this.findSomeCards(cards, 2);
				if (temp1.length >= 2) {
					temp.push(temp1)
				} else {
					flag = false;
				}
			}
			return temp;
		}

		//从手牌里找出所有3张以上
		findSanZhang(cards: any): any {
			let temp = [];
			if (cards.length < 3) return temp;
			let flag: boolean = true;
			while (flag) {
				let temp1 = this.findSomeCards(cards, 3);
				if (temp1.length >= 3) {
					temp.push(temp1)
				} else {
					flag = false;
				}
			}
			return temp;
		}

		//从手牌里找出所有炸弹
		private findBomb(cards: any): any {
			let temp = [];
			if (cards.length < 4) return temp;
			let flag: boolean = true;
			while (flag) {
				let temp1 = this.findSomeCards(cards, 4);
				if (temp1.length == 4) {
					temp.push(temp1)
				} else {
					flag = false;
				}
			}
			return temp;
		}

		//从手牌里去找下想要找的牌型
		promptBtn(cards: any, type: number, length: number, max_val: number, is_move: boolean): any {
			let allCardsArray = [];
			let copyCards = [];
			this.copyTalbe(cards, copyCards);
			this.SortCardsSmall(copyCards);
			if (type == CARD_TYPE.CARDS_TYPE_DAN) {	//找单张
				let temp1 = this.findDuiZi(copyCards);
				//先找出所有单张
				for (let i = 0; i < copyCards.length; i++) {
					let temp = [];
					if (copyCards[i].GetCardVal() > max_val) {
						temp.push(copyCards[i]);
						allCardsArray.push(temp);
					}
				}
				//再去找多张的
				if (temp1.length > 0) {
					for (let i = 0; i < temp1.length; i++) {
						let temp = [];
						if (temp1[i][0].GetCardVal() > max_val && temp1[i].length < 4) {
							temp.push(temp1[i][0]);
							allCardsArray.push(temp);
						}
					}
				}
			} else if (type == CARD_TYPE.CARDS_TYPE_DUI) {	//找出对子，只要2张以上都可以
				let temp1 = this.findDuiZi(copyCards);
				if (temp1.length > 0) {
					for (let i = 0; i < temp1.length; i++) {
						if (temp1[i][0].GetCardVal() > max_val && temp1[i].length == 2) {
							let temp = temp1[i];
							allCardsArray.push(temp);
						}
					}
					for (let i = 0; i < temp1.length; i++) {
						let temp = [];
						if (temp1[i][0].GetCardVal() > max_val && temp1[i].length == 3) {
							for (let k = 0; k < 2; k++) {
								temp.push(temp1[i][k]);
							}
							allCardsArray.push(temp);
						}
					}
				}
			} else if (type == CARD_TYPE.CARDS_TYPE_SAN) {	//找出所有的3根
				let temp1 = this.findSanZhang(copyCards);
				if (temp1.length > 0) {
					for (let i = 0; i < temp1.length; i++) {
						if (temp1[i][0].GetCardVal() > max_val && temp1[i].length == 3) {
							let temp = temp1[i];
							allCardsArray.push(temp);
						}
					}
				}
				if (allCardsArray.length > 0) {	//有了3根，再配2根
					let dz_temp = [];
					let allCards = [];
					this.copyTalbe(cards, allCards);
					this.SortCardsSmall(allCards);
					if (allCards.length <= 5) {	//手牌5张以下，还带有3张的，就全选了
						for (let i = 0; i < allCardsArray.length; i++) {
							allCardsArray[i] = allCards;
						}
					} else {
						let temp2 = this.findDuiZi(allCards);
						//先把对子以上的牌拼成一个数组
						let dz_temp = allCards;
						let new_temp = [];
						for (let i = 0; i < temp2.length; i++) {
							new_temp = new_temp.concat(temp2[i]);
						}
						//开始找牌做单张用
						for (let i = 0; i < new_temp.length; i++) {
							dz_temp.push(new_temp[i]);
						}
						//拼下牌
						for (let k = 0; k < allCardsArray.length; k++) {	//找下和3张不一样的单张
							for (let i = 0; i < dz_temp.length; i++) {
								let val = dz_temp[i].GetCardVal();
								if (val != allCardsArray[k][0].GetCardVal()) {
									allCardsArray[k].push(dz_temp[i]);
									if (allCardsArray[k].length == 5) {
										break;
									}
								}
							}
						}
					}
				}
			} else if (type == CARD_TYPE.CARDS_TYPE_BOMB) {	//找出所有炸弹
				let temp1 = this.findBomb(copyCards);
				if (temp1.length > 0) {
					for (let i = 0; i < temp1.length; i++) {
						if (temp1[i][0].GetCardVal() > max_val) {
							allCardsArray.push(temp1[i]);
						}
					}
				}
				//还有个3A炸弹
				if (this.bombA == 1) {
					let allCards = [];
					this.copyTalbe(cards, allCards);
					let temp2 = this.findSanZhang(allCards);
					if (temp2.length > 0) {
						if (temp2[0][0].GetCardVal() == 13) {	//是3个A
							allCardsArray.push(temp2[0]);
						}
					}
				}
			} else if (type == CARD_TYPE.CARDS_TYPE_SIDAISAN) {	//四带三
				let temp1 = this.findBomb(copyCards);
				if (temp1.length > 0) {
					for (let i = 0; i < temp1.length; i++) {
						allCardsArray.push(temp1[i]);
					}
				}
				//还有个3A炸弹
				if (this.bombA == 1) {
					let allCards = [];
					this.copyTalbe(cards, allCards);
					let temp2 = this.findSanZhang(allCards);
					if (temp2.length > 0) {
						if (temp2[0][0].GetCardVal() == 13) {	//是3个A
							allCardsArray.push(temp2[0]);
						}
					}
				}
			} else if (type == CARD_TYPE.CARDS_TYPE_LIANDUI) {	//找下连对
				let temp1 = this.findDuiZi(copyCards);
				let min_val = max_val - length / 2 + 1;
				for (let i = 0; i < temp1.length - 1; i++) {
					let val = temp1[i][0].GetCardVal();
					let ld_temp = [];
					ld_temp.push(temp1[i][0]);
					ld_temp.push(temp1[i][1]);
					if (temp1[i].length < 4 && val != 14 && val > min_val) {
						for (let k = i + 1; k < temp1.length; k++) {
							let new_val = temp1[k][0].GetCardVal();
							if (val + 1 == new_val && temp1[k].length < 4 && new_val != 14) {
								val = new_val;
								ld_temp.push(temp1[k][0]);
								ld_temp.push(temp1[k][1]);
								if (ld_temp.length == length) {
									allCardsArray.push(ld_temp);
									break;
								}
							}
						}
					}
				}
			} else if (type == CARD_TYPE.CARDS_TYPE_SHUN) {	//找顺子
				let temp1 = this.findDuiZi(copyCards);
				let min_val = max_val - length + 1;
				for (let i = 0; i < temp1.length; i++) {
					if (temp1[i].length < 4) {
						copyCards.push(temp1[i][0]);	//所有牌都抽一张出来
					}
				}
				this.SortCardsSmall(copyCards);
				for (let i = 0; i < copyCards.length - 1; i++) {
					let val = copyCards[i].GetCardVal();
					let sz_temp = [copyCards[i]];
					if (val < 14 && val > min_val) {
						for (let k = i + 1; k < copyCards.length; k++) {
							let new_val = copyCards[k].GetCardVal();
							if (val + 1 == new_val && new_val < 14) {
								val = new_val;
								sz_temp.push(copyCards[k]);
								if (sz_temp.length == length) {
									allCardsArray.push(sz_temp);
									break;
								}
							}
						}
					}
				}
			} else if (type == CARD_TYPE.CARDS_TYPE_TWO_FEIJI) {	//两连飞机，找出3张去判断
				let temp1 = this.findSanZhang(copyCards);
				for (let i = 0; i < temp1.length - 1; i++) {
					let val = temp1[i][0].GetCardVal();
					let st_temp = [];
					st_temp.push(temp1[i][0]);
					st_temp.push(temp1[i][1]);
					st_temp.push(temp1[i][2]);
					if (temp1[i].length < 4 && val != 14 && val > max_val) {
						for (let k = i + 1; k < temp1.length; k++) {
							let new_val = temp1[k][0].GetCardVal();
							if (val + 1 == new_val && temp1[k].length < 4 && new_val != 14) {
								val = new_val;
								st_temp.push(temp1[k][0]);
								st_temp.push(temp1[k][1]);
								st_temp.push(temp1[k][2]);
								if (st_temp.length == 6) {
									allCardsArray.push(st_temp);
									break;
								}
							}
						}
					}
				}
				if (allCardsArray.length > 0) {	//有了3根，再配2根
					let allCards = [];
					this.copyTalbe(cards, allCards);
					this.SortCardsSmall(allCards);
					if (allCards.length <= 10) {	//手牌10张以下，就全选了
						for (let i = 0; i < allCardsArray.length; i++) {
							allCardsArray[i] = allCards;
						}
					} else {
						let temp2 = this.findDuiZi(allCards);
						//先把对子以上的牌拼成一个数组
						let dz_temp = allCards;
						let new_temp = [];
						for (let i = 0; i < temp2.length; i++) {
							new_temp = new_temp.concat(temp2[i]);
						}
						//开始找牌做单张用
						for (let i = 0; i < new_temp.length; i++) {
							dz_temp.push(new_temp[i]);
						}
						//拼下牌
						for (let k = 0; k < allCardsArray.length; k++) {	//找下和飞机不一样的单张
							for (let i = 0; i < dz_temp.length; i++) {
								let val = dz_temp[i].GetCardVal();
								if (val != allCardsArray[k][0].GetCardVal() && val != allCardsArray[k][3].GetCardVal()) {
									allCardsArray[k].push(dz_temp[i]);
									if (allCardsArray[k].length == 10) {
										break;
									}
								}
							}
						}
					}
				}
			} else if (type == CARD_TYPE.CARDS_TYPE_THREE_FEIJI) {	//3连飞机
				let temp1 = this.findSanZhang(copyCards);
				for (let i = 0; i < temp1.length - 1; i++) {
					let val = temp1[i][0].GetCardVal();
					let st_temp = [];
					st_temp.push(temp1[i][0]);
					st_temp.push(temp1[i][1]);
					st_temp.push(temp1[i][2]);
					if (temp1[i].length < 4 && val != 14 && val > max_val) {
						for (let k = i + 1; k < temp1.length; k++) {
							let new_val = temp1[k][0].GetCardVal();
							if (val + 1 == new_val && temp1[k].length < 4 && new_val != 14) {
								val = new_val;
								st_temp.push(temp1[k][0]);
								st_temp.push(temp1[k][1]);
								st_temp.push(temp1[k][2]);
								if (st_temp.length == 9) {
									allCardsArray.push(st_temp);
									break;
								}
							}
						}
					}
				}
				if (allCardsArray.length > 0) {	//有了3根，再配2根
					let allCards = [];
					this.copyTalbe(cards, allCards);
					this.SortCardsSmall(allCards);
					if (allCards.length <= 15) {	//手牌15张以下，就全选了
						for (let i = 0; i < allCardsArray.length; i++) {
							allCardsArray[i] = allCards;
						}
					} else {
						let temp2 = this.findDuiZi(allCards);
						//先把对子以上的牌拼成一个数组
						let dz_temp = allCards;
						let new_temp = [];
						for (let i = 0; i < temp2.length; i++) {
							new_temp = new_temp.concat(temp2[i]);
						}
						//开始找牌做单张用
						for (let i = 0; i < new_temp.length; i++) {
							dz_temp.push(new_temp[i]);
						}
						//拼下牌
						for (let k = 0; k < allCardsArray.length; k++) {	//找下和飞机不一样的单张
							for (let i = 0; i < dz_temp.length; i++) {
								let val = dz_temp[i].GetCardVal();
								if (val != allCardsArray[k][0].GetCardVal() && val != allCardsArray[k][3].GetCardVal() && val != allCardsArray[k][6].GetCardVal()) {
									allCardsArray[k].push(dz_temp[i]);
									if (allCardsArray[k].length == 15) {
										break;
									}
								}
							}
						}
					}
				}
			}
			//没找到牌，那看下自己有没炸弹
			if (!is_move) {	//滑动选牌的话，就不需要再判断炸弹了
				if (type != CARD_TYPE.CARDS_TYPE_BOMB) {
					let allCards = [];
					this.copyTalbe(cards, allCards);
					this.SortCardsSmall(allCards);
					let temp1 = this.findBomb(allCards);
					if (temp1.length > 0) {
						allCardsArray.push(temp1[0]);
					}
					//还有个3A炸弹
					if (this.bombA == 1) {
						let newCards = [];
						this.copyTalbe(cards, newCards);
						let temp1 = this.findSanZhang(newCards);
						if (temp1.length > 0) {
							if (temp1[0][0].GetCardVal() == 13) {	//是3个A
								allCardsArray.push(temp1[0]);
							}
						}
					}
				}
			}
			return allCardsArray;
		}

		//充值弹框
		alert(str: string, ecb: Function = null, ccb: Function = null, isOnlyOK: boolean = true, okSkin?: string, titleSkin?: string, cancleSkin?: string): void {
			if (!this._game.uiRoot.general.isOpened(TongyongPageDef.PAGE_TONGYONG_TIPS)) {
				this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_TIPS, (tip: TongyongTipsPage) => {
					tip.isOnlyOK = isOnlyOK;
					tip.setInfo(str, ecb, ccb, okSkin, titleSkin, cancleSkin);
				});
			}
		}

		createObj() {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, RpaodekuaiData) as RpaodekuaiData;
			card.pos = new Vector2(870, 268);
			return card;
		}

		sort() {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (i < this._cards.length / this._totalUnitCount)
					this.allCards.push(card);
				else {
					this.otherCards.push(card);
				}
			}
			let mainUnit = this._game.sceneObjectMgr.mainUnit;
			if (!mainUnit) return;
			let idx = mainUnit.GetIndex();
			if (idx == 0) return;
			let count = 0;
			for (let i = 0; i < this.allCards.length; i++) {
				let card = this.allCards[i] as RpaodekuaiData;
				if (card) {
					card.myOwner(idx, idx, i);
					card.index = i;
					card.sortScore = -i;
				}
			}
		}

		//对牌进行排序,大到小
		SortCards(cards: any[]) {
			if (!cards) return;
			cards.sort((a: RpaodekuaiData, b: RpaodekuaiData) => {
				return a.Compare(b, true);
			});
		}

		//托管状态设置牌是否可以点击
		setTG(isTG: boolean) {
			for (let i = 0; i < this.allCards.length; i++) {
				let card = this.allCards[i] as RpaodekuaiData;
				if (card) {
					card.toggle = !isTG;
				}
			}
		}

		//对牌进行排序,小到大
		SortCardsSmall(cards: any[]) {
			if (!cards) return;
			cards.sort((a: RpaodekuaiData, b: RpaodekuaiData) => {
				return b.Compare(a, true);
			});
		}

		//发牌
		fapai() {
			let cardSingleCount: number = this.allCards.length;	//一个人的手牌数
			let cardsMainPos = this.getCardsPosTemp(cardSingleCount, true);
			let cardsOtherPos = this._totalUnitCount > 3 ? this._playFaPaiPos1 : this._playFaPaiPos2;
			let cardIndex = 0;
			let count = 0;
			for (let k = 0; k < this._totalUnitCount; k++) {
				for (let i = 0; i < cardSingleCount; i++) {
					//播音效
					let card: RpaodekuaiData;
					let cardsPos;
					if (k == this._totalUnitCount - 1) {
						//最后一位给到主玩家
						card = this.allCards[i];
						cardsPos = cardsMainPos[i];
					} else {
						card = this.otherCards[i + (k * cardSingleCount)];
						card.scaleX = 0.3;
						card.scaleY = 0.3;
						cardsPos = cardsOtherPos[k];
					}
					Laya.timer.once(50 * count, this, () => {
						this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
						let posX = cardsPos[0];	//当前座位号的发牌位置
						let posY = cardsPos[1];
						card.mingpai(posX, posY);
						cardIndex++;
						if (cardIndex >= cardSingleCount * this._totalUnitCount)
							this.event(RpaodekuaiMgr.DEAL_CARDS);
					});
					count++;
				}
			}
		}

		//重连发牌
		refapai() {
			let cardsPos = this.getCardsPosTemp(this.allCards.length, true);
			for (let i = 0; i < this.allCards.length; i++) {
				let card = this.allCards[i] as RpaodekuaiData;
				let posX = cardsPos[i][0];
				let posY = cardsPos[i][1];
				if (card) {
					card.refapai(posX, posY);
				}
			}
			//清理其他人的牌
			this.clearOtherCard();
		}

		//清理其他的发牌
		clearOtherCard(): void {
			for (let i = 0; i < this.otherCards.length; i++) {
				let card = this.otherCards[i];
				if (card) {
					this._game.sceneObjectMgr.clearOfflineObject(card);
				}
				this.otherCards.splice(i, 1);
				i--
			}
			this.otherCards = [];
		}

		//出牌
		playingCard(seat: number, cards: any) {
			if (cards.length < 1) return;
			let mainUnit = this._game.sceneObjectMgr.mainUnit;
			if (!mainUnit) return;
			let mainIdx = mainUnit.GetIndex();
			if (mainIdx == 0) return;
			this.clearPlayingCard(seat);
			if (seat == mainIdx) {
				let cardsPos = this.getCardsPosTemp(cards.length, false);
				for (let i = 0; i < cards.length; i++) {
					let card: RpaodekuaiData;
					for (let k = 0; k < this.allCards.length; k++) {
						if (cards[i].GetVal() == this.allCards[k].GetVal()) {
							card = this.allCards[k];
							break;
						}
					}
					let posX = cardsPos[i][0];
					let posY = cardsPos[i][1];
					if (card) {
						card.sortScore = -i;
						card.toggle = false;
						card._isPlaying = true;
						card.playingcard(posX, posY);
						this.delCard(card);
						this._cardsTemp[seat - 1].push(card);
					}
				}
				this.tidyCard();
			} else {
				let temp = [];
				if (this._totalUnitCount == 3) {
					temp = this._playCardsPos2;
				} else if (this._totalUnitCount == 4) {
					temp = this._playCardsPos1;
				}
				let posIdx = (seat - mainIdx + this._totalUnitCount) % this._totalUnitCount;
				for (let i = 0; i < cards.length; i++) {
					let posX = temp[posIdx - 1][0] + i * temp[posIdx - 1][2];
					let posY = temp[posIdx - 1][1];
					let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, RpaodekuaiData) as RpaodekuaiData;
					card.pos = new Vector2(posX, posY);
					card.Init(cards[i].GetVal());
					if (card) {
						if (posIdx == 1) {
							card.sortScore = i;
						} else {
							card.sortScore = -i;
						}
						card.otherPlayCard();
						this.delCard(card);
						this._cardsTemp[seat - 1].push(card);
					}
				}
			}
		}

		//结束后摊牌
		showCards(seat: number, cards: any): void {
			if (cards.length < 1) return;
			let mainUnit = this._game.sceneObjectMgr.mainUnit;
			if (!mainUnit) return;
			let mainIdx = mainUnit.GetIndex();
			if (mainIdx == 0) return;
			this.clearPlayingCard(seat);
			let temp = [];
			if (this._totalUnitCount == 3) {
				temp = this._playCardsPos2;
			} else if (this._totalUnitCount == 4) {
				temp = this._playCardsPos1;
			}
			let posIdx = (seat - mainIdx + this._totalUnitCount) % this._totalUnitCount;
			for (let i = 0; i < cards.length; i++) {
				let posX = temp[posIdx - 1][0] + i * temp[posIdx - 1][2];
				let posY = temp[posIdx - 1][1];
				let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, RpaodekuaiData) as RpaodekuaiData;
				card.pos = new Vector2(posX, posY);
				card.Init(cards[i]);
				if (card) {
					if (posIdx == 1) {
						card.sortScore = i;
					} else {
						card.sortScore = -i;
					}
					card.otherPlayCard();
				}
			}
		}

		private getCardsPosTemp(val: number, shoupai: boolean): any {
			let temp = [];
			let cardTemp: any;
			if (shoupai) {
				cardTemp = this._centerPlayPosTemp;
			} else {
				cardTemp = this._centerPosTemp;
			}
			let space = cardTemp[2];
			let posX = cardTemp[0];
			let posY = cardTemp[1];
			for (let i = 1; i <= val; i++) {
				let spaceVal = Math.floor(i / 2);
				let posTemp = [];
				if (i % 2 == 0) {
					posTemp = [posX - space * spaceVal, posY]
				} else {
					posTemp = [posX + space * spaceVal, posY]
				}
				temp.push(posTemp);
			}
			temp.sort((a: number, b: number) => {
				return a[0] - b[0];
			});
			return temp;
		}

		//翻牌
		showMainCards() {
			for (let i = 0; i < this.allCards.length; i++) {
				let card = this.allCards[i];
				if (card) {
					card.fanpai();
				}
			}
			this.isShowCards = true;
		}

		//从手牌中删除
		delCard(card: any): void {
			for (let i = 0; i < this.allCards.length; i++) {
				if (this.allCards[i].GetVal() == card.GetVal()) {
					this.allCards.splice(i, 1);
					break;
				}
			}
		}

		//整理下手牌
		tidyCard() {
			let cardsPos = this.getCardsPosTemp(this.allCards.length, true);
			for (let i = 0; i < this.allCards.length; i++) {
				let card = this.allCards[i];
				if (card) {
					card.sortScore = -i;
					card.index = i;
					card.toggle = false;
					card.disable = false;
					let posX = cardsPos[i][0];
					let posY = cardsPos[i][1];
					card.mingpai(posX, posY, true);
				}
			}
		}

		// 清理指定玩家卡牌对象
		clearCardObject(): void {
			this._game.sceneObjectMgr.ForEachObject((obj: any) => {
				if (obj instanceof RpaodekuaiData) {
					this._game.sceneObjectMgr.clearOfflineObject(obj);
				}
			})
		}

		//清除打出去的卡牌
		clearPlayingCard(seat: number): void {
			for (let i = 0; i < this._cardsTemp[seat - 1].length; i++) {
				let card = this._cardsTemp[seat - 1][i];
				if (card) {
					this._game.sceneObjectMgr.clearOfflineObject(card);
				}
			}
			this._cardsTemp[seat - 1] = [];
		}

		//重置数据
		resetData(): void {
			this._cardsTemp = [[], [], [], []];
			this._isReDealCard = false;
			this.isShowCards = false;
			this.allCards = [];
			this.otherCards = [];
			this.clearCardObject();
		}
	}
}
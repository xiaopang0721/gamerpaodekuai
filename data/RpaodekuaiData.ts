/**
* 跑得快 
*/
module gamerpaodekuai.data {
	export class RpaodekuaiData extends gamecomponent.object.PlayingPuKeCard {
		private _cardsPosTemp = [247, 625, 45];	//自己手牌第一张牌的位置
		private _mainPlayerIndex: number;
		public _ownerIdx: number;		//牌的归属座位
		public _cardIndex: number;		//牌的序号
		public _isPlaying: boolean = false;	//是不是打出的牌
		myOwner(index: number, seat: number, cardIndex: number) {
			this._mainPlayerIndex = index;
			this._ownerIdx = seat;
			this._cardIndex = cardIndex;
			this.scaleX = -1;
			this.size = 0.2;
		}

		protected Analyze(): void {
			this._card_val = this._val % 13;
			if (this._card_val == 0) this._card_val = 13;
			if (this._card_val == 1) this._card_val = 14;
			this._card_color = Math.floor(this._val / 13);
		}

		fapai() {
			let posX = this._cardsPosTemp[0];
			let posY = this._cardsPosTemp[1];
			let space = this._cardsPosTemp[2];
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX + this.index * space;
			this.targe_pos.y = posY;
			this.time_interval = 400;
			this.isFinalPos = false;
			if (!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
		}

		mingpai(posX, posY, isSort?) {
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.toggleEnable = true;
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			this.time_interval = 200;
			this.isFinalPos = false;
			if (isSort) {
				this.size = 1.1;
			} else {
				Laya.Tween.to(this, { size: 1.1 }, this.time_interval);
			}
			if (!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
		}

		jiamingpai(posX, posY) {
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.toggleEnable = true;
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			this.time_interval = 200;
			this.isFinalPos = false;
			Laya.Tween.to(this, { size: 0.45 }, this.time_interval);
			if (!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
		}

		playingcard(posX, posY) {
			this.size = 0.7;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.toggleEnable = false;
			this.isShow = true;
			this.scaleX = 1;
			this.isFinalPos = true;
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			this.disable = false;
			this.time_interval = 150;
			if (!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
		}

		otherPlayCard() {
			this.size = 0.7;
			this.isFinalPos = true;
			this._isPlaying = true;
			this.isShow = true;
			this.toggleEnable = false;
			this.disable = false;
		}

		//重连发牌
		refapai(posX, posY) {
			this.size = 1.1;
			this.pos.x = posX;
			this.pos.y = posY;
			this.isShow = true;
			this.scaleX = 1;
			this.isFinalPos = false;
			this.toggleEnable = true;
		}

		fanpai() {
			super.fanpai();
		}
	}
}
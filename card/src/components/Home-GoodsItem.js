import React, { Component } from 'react';
import GoodsitemImg from "../images/home-goositem.jpg"

class GoodsItem extends Component {
  render() {
    return (
      <div className="GoodsItem">
          <div className="item-img">
            <img src={GoodsitemImg} alt=""/>
          </div>
          <div className='item-info'>
            <div className='info-name textOverflow2'>1231水电费水电费23秘萨23123德提 1kg装 肉质紧脆 水润不腻</div>
            <div className='info-price'>12.8</div>
          </div>

      </div>
    );
  }
}

export default GoodsItem;

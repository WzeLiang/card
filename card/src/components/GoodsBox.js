import React, { Component } from 'react';
import GoodsItem from "./Home-GoodsItem"

class GoodsBox extends Component {
  render() {
    return (
      <div className="GoodsBox">
            <div className="box-header">
                <div className="header-left">
                    <img src="" alt=""/>
                    <div></div>
                </div>
                <div className="header-right">
                    <div>more</div>
                </div>
            </div>
            <div className="box-goodslist">
                <GoodsItem></GoodsItem>
            </div>
      </div>
    );
  }
}

export default GoodsBox;

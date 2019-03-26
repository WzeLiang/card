import React, { Component } from 'react';
import GoodsItem from "./Home-GoodsItem"
import LeftLogo from "../images/home-list-icon1.jpg"
import RightIcon from "../images/icon-right.png"
class GoodsBox extends Component {
  constructor(props){
    super(props)
    this.state= {
      list:[1,2,2,2,3]
    }
   
  }
  render() {
    return (
      <div className="GoodsBox">
            <div className="box-header">
                <div className="header-left">
                    <img src={LeftLogo} alt=""/>
                    <div>食恪天地</div>
                </div>
                <div className="header-right">
                    <div>更多</div>
                    <img src={RightIcon} alt=""/>
                </div>
            </div>
            <div className="box-goodslist">
              {
                this.state.list.map((item,index)=>{
                  return <GoodsItem key={index}></GoodsItem>
                })
              }
                
            </div>
      </div>
    );
  }
}

export default GoodsBox;

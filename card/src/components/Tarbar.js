import React, { Component } from 'react';
import imgHomeOff from "../images/tabbar-home-off.png"
import imgHomeOn from "../images/tabbar-home-on.png"
import imgOrderOff from "../images/tabbar-order-off.png"
import imgOrderOn from "../images/tabbar-order-on.png"
import imgMyOff from "../images/tabbar-member-off.png"
import imgMyOn from "../images/tabbar-member-on.png"
import {HashRouter , Route , Link, Switch} from 'react-router-dom'
const Tabbox = {
  position:"fixed",
  width:"100%",
  left:"0",
  bottom:"0",
  display:"flex",
  alignItems:"center",
  height:"1rem",
  fontSize:".24rem",
  boxShadow:"rgba(0, 0, 0, 0.2) 0px 0px 20px",
  background:"#ffffff"
}
const Tabitem={
  width:"100%",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  height:"100%",
  flexDirection:"column"

}
class Tarbar extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[
        {"id":1,"name":"主页","path":"/","img":imgHomeOff},
        {"id":2,"name":"订单","path":"/order","img":imgHomeOff},
        {"id":3,"name":"我的","path":"/my","img":imgHomeOff},
      ]
    }
  }
  
  render() {
    return (
      <div className="tab-box" style={Tabbox}>
        {
            this.state.list.map((item,index)=>{
              return(
                <HashRouter key={index}>
                  <Link  to={item.path}  style={Tabitem} >
                  <img src={item.img} alt="" style={{width:".56rem"}}/>
                  <div>{item.name}</div>
                </Link>
                </HashRouter>
              )
            })
        }
      </div>
    );
  }
}

export default Tarbar;

import React, { Component } from 'react';
import Tarbar from '../components/Tarbar'
import GoodsBox from "../components/GoodsBox"
import "../css/home.css"
class Home extends Component {
  constructor(props){
    super(props)
    this.state= {
      list:[1,2,2,2,3]
    }
   
  }
  render() {
    return (
      <div className="Home">
            {
                this.state.list.map((item,index)=>{
                  return   <GoodsBox key={index}></GoodsBox>
                })
              }
          
            <Tarbar></Tarbar>
      </div>
    );
  }
}

export default Home;

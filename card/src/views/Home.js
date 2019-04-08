import React, { Component } from 'react';
import Tarbar from '../components/Tarbar'
import GoodsBox from "../components/GoodsBox"
import "../css/home.css"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import axios from "../request/request"

class Home extends Component {
  constructor(props){
    super(props)
    this.state= {
      list:[1,2,2,2,3],
      carouselr:[
        {"picUrl":"https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=3660968530,985748925&fm=191&app=48&size=h300&n=0&g=4n&f=JPEG?sec=1853310920&t=5e64af964be378c6c2a3b0acc65dfe24"},
        {"picUrl":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=935292084,2640874667&fm=27&gp=0.jpg"},
        {"picUrl":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg"}
      ]
    }
   
  }
  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,//这里是自动轮播

        slidesOffsetAfter : 100,
        autoplay:{
            delay:30000 ,
            disableOnInteraction: false
        },
        pagination : {
            el:'.swiper-pagination',//这里是分页器设置
        }
    });
}

  render() {
    return (
      <div className="Home" style={{background:"#ffffff"}}>
            <div onClick={this.getBanner.bind(this)} style={{fontSize:"30px"}}> 测试</div>
             <div className="swiper-container" style={{paddingTop:".5rem"}}>
                <div className="swiper-wrapper">
                {
                    this.state.carouselr.map((item,index)=>{
                        return(
                                <div className="swiper-slide" key={index} style={{width:"100%",margin:"0",height:"3rem"}}>
                                    <img src={item.picUrl} style={{width:"100%",borderRadius:'.2rem',height:"3rem"}}/>
                                </div>
                        )
                    })
                }
              </div>
              <div className='swiper-pagination'></div>
             </div>
            {
                this.state.list.map((item,index)=>{
                  return   <GoodsBox key={index}></GoodsBox>
                })
              }
          
            <Tarbar></Tarbar>
      </div>
    );
  }
  getBanner(){
    console.log( axios)
    axios.post("/api/index/getBanner",{})
    .then((res)=>{
      console.log(res);
    })
  }
}

export default Home;

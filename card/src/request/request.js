import axios from "axios";
import {Toast} from "antd-mobile"
import {HashRouter, Route, Switch, hashHistory} from 'react-router-dom';
import qs from "qs"
axios.defaults.baseURL="https:jkcard.shikefood.com";


let http={
    get:"",
    post:""
}

http.get = function(url, params) {
    params.token=localStorage.getItem("token")?localStorage.getItem("token"):""
      return new Promise((resolve, reject) => {
        axios.get(url, {
          params: params,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        }).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
http.post = function(url, params) {
    params.token=localStorage.getItem("token")?localStorage.getItem("token"):""
      return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params), {
            headers: {
                  'Accept': 'application/json',
                //  "Accept":"*/*",
                 'Content-Type': 'application/json',
                // dataType: "json"
            },
          }
        ).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    }




axios.interceptors.request.use(function (config) {
    Toast.loading('加载中', 0);
    return config
  });

axios.interceptors.response.use((config)=>{
    Toast.hide();
    if(config.data.code==300){
        HashRouter.push("/login")
    }
    return config

  });
  export default http
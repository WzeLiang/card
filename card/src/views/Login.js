import React, { Component } from 'react';
import "../css/login.css"
import axios from "axios"

class login extends Component {
  constructor(props){
    super(props)
    this.state= {
      mobile:"",
      verificationCode:""
    }
  }
  
  render() {
    return (
      <div className="login">
        <div className="form">
            <div className="form-item">
                <input type="number" maxLength="11" placeholder="请输入手机号码" name="mobile"  onChange={this.handelChange.bind(this)} />
            </div>
            <div className="form-item VerCode">
                <input type="number" maxLength="6" placeholder="请输入验证码" name="verificationCode"  onChange={this.handelChange.bind(this)}/>
                <div className="getvercode" onClick={this.getVercode.bind(this)} >获取验证码</div>
            </div>
            <div className="goLogin" onClick={this.goLogin.bind(this)}>登录</div>
        </div>
      </div>
    );
  }
  getVercode(){
    axios.post('/api/public/getCheckCode', {
      mobile: this.state.mobile,
      type:1
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handelChange(e){
      console.log(e.target.value);
      let o={}
      o[e.target.name]=e.target.value;
      this.setState(o)

  }
  goLogin(){
    console.log(this.state.verificationCode)
    axios.post('/api/account/login', {
      mobile: this.state.mobile,
      verificationCode:this.state.verificationCode,
      type:1
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}

export default login;

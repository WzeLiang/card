import React, { Component } from 'react';
import Tarbar from '../components/Tarbar'
import "../css/my.css"
class My extends Component {
  render() {
    return (
      <div className="My">
        <div className='user'>
            <div className='user-name'>个人中心</div>
            <div className="user-set">
              <img src={require("../images/icon-set.png")} alt=""/>
            </div>
        </div> 

        {/* 卡 */}
        <div className="card">
          <div className='card-msg'>
            查看合同
            <img src={require("../images/icon-right.png")} alt=""/>
          </div>
        </div>
        
        {/* 可用消费金 */}
        <div className="balance">
            <div className="left">
              <div className="left-top">可用消费金</div>
              <div className="left-number">
                ￥<span>5721.55</span>
              </div>
            </div>
            <div className="right">
              补充消费金
            </div>
        </div>

        {/* 付款--充值 */}
        <div className="catch-box">
          <div className="box-border"></div>
          <div className="catch-item">
            <img src={require("../images/mamber-pay.png")} alt=""/>
            付款
          </div>
          <div className="catch-item">
            <img src={require("../images/mamber-opensub.png")} alt=""/>
            补充消费金
          </div>
        </div>

        {/* 副卡列表 */}
        <div className="subcard">
          <div className="subcard-list">
            <div className="subcard-item">
                <div className="item-info">
                    <div className="info-name">副卡1</div>
                    <div className="info-phone">
                      14791286530
                    </div>
                </div>
            </div>
          </div>
        </div>

      

      {/* 回购信息 */}
      <div className="buyback">
        <div className="left">会员卡到期后，可申请回购剩余消费金</div>
        <div className="right">申请回购</div>
      </div>

      <div className='gary-back'></div>
      
      {/* 消费金信息面板 */}

      <div className="moneypanel">

        <div className="moneypanel-msg">
            <div className='msg-money'>
              <div className='numb'>300000</div>
              <div className='text'>买入金额</div>
            </div>
            <div className='msg-year'>
              <div className='numb'>10</div>
              <div className='text'>期限（年）</div>
            </div>
            <div className='msg-day'>
              <div className='numb'>25</div>
              <div className='text'>剩余天数（天）</div>
            </div>
        </div>
        
        <div className="moneypanel-tips">
            <img  className='lefthorn' src={require("../images/mamber-lefthorn.png")}/>
        
            <img className='righthorn' src={require("../images/mamber-righthorn.png")}/>
          
          <div className='tips-left'>第一年消费金已发放</div>
          <div className='tips-right'>
            发放金额 <span>100</span>元
          </div>
        </div>

        <div className='moneypanel-bottom'>
          <div>可于2018.12.12-2.19.23.21赎回。</div>
          <div className='bottom-btn' >申请赎回</div>
    </div>

      </div>


      <Tarbar></Tarbar>
      </div>
    );
  }
}

export default My;

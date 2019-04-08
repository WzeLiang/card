import React, { Component } from 'react';
import Tarbar from '../components/Tarbar'
import "../css/order.css"
class Order extends Component {
  render() {
    return (
      <div className="Order">

            <div className="tab">
              <div className="tab-item">
                <div className='item-name'>全部</div>
                <div className='item-border'></div>
              </div>
            </div>

            <div className="order-list">
              <div className='order-item'>

              </div>
            </div>

            <Tarbar></Tarbar>
      </div>
    );
  }
}

export default Order;

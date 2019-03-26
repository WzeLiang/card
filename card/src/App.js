import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Home from "./views/Home"
import Login from "./views/Login"
import Order from "./views/Order"
import My from "./views/My"
import {HashRouter , Route , Link, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
       <HashRouter>
                 {/* <Link to="/login">登录</Link> */}
                
                    <Switch>
                        <Route exact={true} path="/" component={Home}></Route>
                        <Route path="/order" component={Order}></Route>
                        <Route path="/my" component={My}></Route>
                        <Route  path="/login" component={Login}></Route>
                    </Switch>
              
            </HashRouter>
        
      </div>
    );
  }
}

export default App;

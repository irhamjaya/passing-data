import React, { Component } from 'react';
import Lempar from './component/Lempar'

class App extends Component {
  constructor(){
    super();
    this.state={input:'tombol submit belum diklik'}
  }

  klik(){
    this.setState({input: this.refs.nama.value});
  }

  render() {
    return (
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="active">
                <a className="nav-link active" data-toggle="tab" href="#login">Login</a>
            </li>
            <li><a className="nav-link active" data-toggle="tab" href="#welcome">Welcome</a></li>
          </ul>
          <div className="tab-content">
            <div id="login" className="tab-pane fade in active">
              <label for="namae">Name</label> 
              <input className="form-control" id="namae" ref="nama" type="text"/><br/>
              <button type="submit" className="btn btn-primary" onClick={()=>{this.klik();}}>Submit</button>
            </div>
            <div id="welcome" className="tab-pane fade">
            <Lempar masuk={this.state.input}/> 
            </div>
          </div>
        </div>
    );
  }
}
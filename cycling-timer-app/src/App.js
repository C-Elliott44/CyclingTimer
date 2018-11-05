import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Modal from "./components/modal.js";



const SetUp = () => {
  return (
    <div>
      <h1>Timer 1/1</h1>
      <form>
        Timer Name:
        <input type="text" />
        <br />
        Duration: <input type="number" name="quantity" min="0" max="10" placeholder="0"/> Hrs <input type="number" name="quantity" min="0" max="10" placeholder="0"/> Mins <input type="number" name="quantity" min="0" max="10" placeholder="0"/> Secs
        <br />
        Ending Alert: <lable><input type="checkbox" /></lable> None <lable><input type="checkbox" /></lable> 5 Secs <lable><input type="checkbox" /></lable> 10 Secs <lable><input type="checkbox" /></lable> 15 Secs
      </form>
    </div>
  );
};

class App extends Component {

  state = {
    show: false,
  };

  showModal = () => {
    this.setState({ show: true});
  };

  hideModal = () => {
    this.setState({ show: false});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Spin Timer</h1>
        </header>
        <section>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <SetUp />
          </Modal>
            <h2>New Timer <button type="button" onClick={this.showModal}>+</button></h2>
        </section>
      </div>
    );
  }
}

export default App;

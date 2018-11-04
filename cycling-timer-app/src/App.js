import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Modal from "./components/modal.js";

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
            <p>Modal</p>
            <p>Data</p>
          </Modal>
            <h2>New Timer <button type="button" onClick={this.showModal}>+</button></h2>
        </section>
      </div>
    );
  }
}

export default App;

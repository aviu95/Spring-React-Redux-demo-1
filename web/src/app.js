import React, { Component } from 'react';
import NavBar from "./component/presentation/navbar";
import MainContainer from "./component/presentation/main-container";

class App extends Component {
  render() {
    return(
      <div className={'container'}>
        <NavBar/>
        <MainContainer/>
      </div>
    );
  }
}

export default App;


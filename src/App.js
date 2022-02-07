import './App.css';
import { connect } from 'react-redux'
import SimpleTabs from './Components/Nav/nav'
import Routes from "./Routes";
import React from "react";

function App() {
  return (
    <div className="App">
        <SimpleTabs />
        <Routes />
    </div>
  )
}

export default connect()(App);

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import PermanentDrawerLeft from './components/PermanentDrawerLeft'
import { TotalConfirmed } from './components/TotalConfirmed'

function App() {
  return (
    <div className="App">
      <TotalConfirmed />
    </div>
  );
}

export default App;

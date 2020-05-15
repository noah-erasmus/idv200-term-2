import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import PermanentDrawerLeft from './components/PermanentDrawerLeft'
import { CovidTest } from './components/LaunchesPerYear'

function App() {
  return (
    <div className="App">
      <CovidTest />
    </div>
  );
}

export default App;

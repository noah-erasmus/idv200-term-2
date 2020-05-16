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
      <Grid>

      <Grid lg={3} sm={6} xl={3} xs={12}>
        <TotalConfirmed />
      </Grid>

      </Grid>
      
    </div>
  );
}

export default App;

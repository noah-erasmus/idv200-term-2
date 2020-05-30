import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import PermanentDrawerLeft from './components/PermanentDrawerLeft'
import { TotalConfirmed } from './components/TotalConfirmed'
import { CumulativeDeaths } from './components/CumulativeDeaths'
import { LocalCasesAndRecoveries } from './components/CasesOverTime'

function App() {
  return (
    <div className="App">

      <Grid container>

        <Grid item lg={3} sm={6} xl={6} xs={12}>
          <LocalCasesAndRecoveries />
        </Grid>

        <Grid item lg={3} sm={6} xl={6} xs={12}>
          <CumulativeDeaths />
        </Grid>
      </Grid>
      
      
      
    </div>
  );
}

export default App;

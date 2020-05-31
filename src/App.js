import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import { TotalConfirmed } from './components/TotalConfirmed'
import { CumulativeDeaths } from './components/CumulativeDeaths'
import { LocalCasesAndRecoveries } from './components/CasesOverTime'
import { CaseBreakdown } from './components/CaseStatusBreakdown'
import { DashBar } from './components/AppBar'

function App() {
  return (
    <div className="App">
      <DashBar />

      <Grid container spacing={4}>

        <Grid item lg={3} sm={6} xl={6} xs={12}>
          <LocalCasesAndRecoveries />
        </Grid>

        <Grid item lg={3} sm={6} xl={6} xs={12}>
          <CumulativeDeaths />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xl={6}>
          <CaseBreakdown></CaseBreakdown>
        </Grid>

        <Grid item>
          <TotalConfirmed/>
        </Grid>

      </Grid>
      
      
      
    </div>
  );
}

export default App;

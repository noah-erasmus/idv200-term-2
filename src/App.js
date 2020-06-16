import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Paper, Card, CardContent } from '@material-ui/core';
import { TotalConfirmed } from './components/TotalConfirmed'
import { CumulativeDeaths } from './components/CumulativeDeaths'
import { LocalCasesAndRecoveries } from './components/CasesOverTime'
import { CaseBreakdown } from './components/CaseStatusBreakdown'
import { CovidMap } from './components/CovidMap'
import { DashBar } from './components/AppBar'

const cardStyle = {
  width: '90%',
  margin: 'auto',
  marginTop: '50px'
}

const sectionHeadingStyle = {
  marginBottom: '40px'
}

function App() {
  return (
    <div className="App">
      <DashBar />

      <Card style={cardStyle}>
        <CardContent>
          <Typography variant='h2' style={sectionHeadingStyle}>
            Worldwide Confirmed Cases
          </Typography>
          <Grid container spacing={10}>
            <Grid item lg={3}>
              <TotalConfirmed></TotalConfirmed>
            </Grid>
            <Grid item lg={8}>
              <CovidMap></CovidMap>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card style={cardStyle}>
        <CardContent>
          <Typography variant='h2' style={sectionHeadingStyle}>
            Cases in South Africa
          </Typography>
          <Grid container>
            <Grid item lg={6}>
              <LocalCasesAndRecoveries></LocalCasesAndRecoveries>
            </Grid>
            <Grid item lg={6}>
              <CaseBreakdown></CaseBreakdown>
            </Grid>
          </Grid>
        </CardContent>
      </Card>




      {/* <Grid container spacing={4}>

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

        <Grid item xl={6}>
          <TotalConfirmed />
        </Grid>

      </Grid>

      <Grid container xl={12}>
        <Grid item>

        </Grid>

      </Grid> */}



    </div>
  );
}

export default App;

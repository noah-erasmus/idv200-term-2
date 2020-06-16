//Import dependencies
import React from 'react';
import './App.css';
import { Grid, Typography, Paper, Card, CardContent } from '@material-ui/core';
import { TotalConfirmed } from './components/TotalConfirmed'
import { LocalCases } from './components/LocalCases'
import { LocalRecoveries } from './components/LocalRecoveries'
import { CaseBreakdown } from './components/CaseStatusBreakdown'
import { CovidMap } from './components/CovidMap'
import { DashBar } from './components/AppBar'


//Styling Objects
const cardStyle = {
  width: '90%',
  margin: 'auto',
  marginTop: '50px'
}

const sectionHeadingStyle = {
  marginBottom: '40px'
}

//App Render
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
            <Grid item lg={4}>
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
              <LocalCases></LocalCases>
            </Grid>
            <Grid item lg={6}>
              <CaseBreakdown></CaseBreakdown>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </div>
  );
}

export default App;

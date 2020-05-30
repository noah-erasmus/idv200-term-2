import React, { useState, useEffect, useMemo } from 'react'
import {Line} from "react-chartjs-2" 
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Loading } from './Loading'

const useStyles = makeStyles({
    root: {
    },
    casesChart: {
    }
})

const defaultData = {
  labels: ["one", 'Two', "three", "four", "five", 'six'],
  datasets: [
    {
      label: 'Cases',
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
      pointBorderColor: 'blue',
      pointRadius: 1,
      data: [10, 5, 6 ,12 ,3, 4,]
    }
  ]
}


export const CumulativeDeaths = () => {
    const classes = useStyles();
    const [lineData, setLineData] = useState(defaultData)
    const [totalConfirmed, setTotalConfirmed] = useState(0)

    useEffect(() => {
        console.log("This component rendered.")
        fetch('https://api.covid19api.com/country/south-africa/status/confirmed')
        .then(response => {
            return response.json()
        })
        .then(data => {
            const dataset = {
              ...defaultData.datasets[0],
              data: data.map(d => d.Cases)
            }
            const newData = {
              ...defaultData,
              labels: data.map(d => d.Date.slice(0,-10)),
              datasets: [dataset]
            }
            setLineData(newData)
            setTotalConfirmed(data[data.length-1].Cases)
            
        })
        .catch(err => {
            console.log(`There was an error ${err}`)
        })
        
    }, [])

    return (
      <Card>
        <CardContent>
          <Typography>South Africa</Typography>
              
              <Grid container direction='row'>
                <Grid item lg={2}>
                  <Typography>Confirmed Cases</Typography>
                  <Typography>{totalConfirmed}</Typography>
                </Grid>
                <Grid item xl={10}>
                  <Line data={lineData}/>
                </Grid>
              </Grid>
          
        </CardContent>
      </Card>
    )
}

import React, { useState, useEffect, useMemo } from 'react'
import { Line } from "react-chartjs-2"
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Loading } from './Loading'

const useStyles = makeStyles({
  root: {
  },
  casesChart: {
  }
})

const defaultOptions = {
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }],
    yAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }]
  },
  legend: {
    position: 'bottom'
  }

}



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
      data: [10, 5, 6, 12, 3, 4,]
    },
    {
      label: 'Cases',
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
      pointBorderColor: 'blue',
      pointRadius: 1,
      data: [10, 5, 6, 12, 3, 4,]
    },
    {
      label: 'Cases',
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
      pointBorderColor: 'blue',
      pointRadius: 1,
      data: [10, 5, 6, 12, 3, 4,]
    }
  ]
}


export const LocalCases = () => {
  const deepClone = (o) => JSON.parse(JSON.stringify(o))

  const classes = useStyles();
  const [lineData, setLineData] = useState(deepClone(defaultData))
  const [totalConfirmed, setTotalConfirmed] = useState(0)
  const [chartOptions, setChartOptions] = useState(defaultOptions)



  useEffect(() => {
    console.log("This component rendered.")
    fetch('https://api.covid19api.com/live/country/south-africa/status/confirmed')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const confirmedDataset = {
          ...defaultData.datasets[0],
          data: data.map(d => d.Confirmed)
        }
        const recoveredDataset = {
          ...defaultData.datasets[1],
          data: data.map(d => d.Recovered)
        }
        const deathsDataset = {
          ...defaultData.datasets[2],
          data: data.map(d => d.Deaths)
        }
        const newData = {
          labels: data.map(d => d.Date.slice(0, -10)),
          datasets: [confirmedDataset, recoveredDataset, deathsDataset]
        }
        console.log(newData)
        setLineData(newData)
        console.log(lineData)
        setTotalConfirmed(data[data.length - 1].Cases)

      })
      .catch(err => {
        console.log(`There was an error ${err}`)
      })


  }, [])

  return (
    <div>
      <Typography>South Africa</Typography>

      <Grid container direction='row'>
        <Grid item lg={2}>
          <Typography>Confirmed Cases</Typography>
          <Typography>{totalConfirmed}</Typography>
        </Grid>
        <Grid item xl={9}>
          <Line data={lineData} options={chartOptions} />
        </Grid>
      </Grid>

    </div>
  )
}

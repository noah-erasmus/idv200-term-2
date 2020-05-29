import React, { useState, useEffect, useMemo } from 'react'
import {Line} from "react-chartjs-2" 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Loading } from './Loading'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
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


export const CasesOverTime = () => {
    const classes = useStyles();
    const [lineData, setLineData] = useState(defaultData)

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
              labels: data.map(d => d.Date),
              datasets: [dataset]
            }
            setLineData(newData)
        })
        .catch(err => {
            console.log(`There was an error ${err}`)
        })
        
    }, [])

    return lineData ? <Line data={lineData}/> : <Loading/>
}

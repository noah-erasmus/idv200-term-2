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
        }
    ]
}


export const LocalDeaths = () => {
    const classes = useStyles();
    const [lineData, setLineData] = useState(defaultData)
    const [totalConfirmed, setTotalConfirmed] = useState(0)
    const [chartOptions, setChartOptions] = useState(defaultOptions)

    useEffect(() => {
        console.log("This component rendered.")
        fetch('https://api.covid19api.com/live/country/south-africa/status/confirmed')
            .then(response => {
                return response.json()
            })
            .then(data => {
                const dataset = {
                    ...defaultData.datasets[0],
                    data: data.map(d => d.Deaths)
                }
                const newData = {
                    ...defaultData,
                    labels: data.map(d => d.Date.slice(0, -10)),
                    datasets: [dataset]
                }
                setLineData(newData)
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
                    <Typography>Deaths</Typography>
                    <Typography>{totalConfirmed}</Typography>
                </Grid>
                <Grid item xl={9}>
                    <Line data={lineData} options={chartOptions} />
                </Grid>
            </Grid>

        </div>
    )
}
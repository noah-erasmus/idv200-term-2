import React, { useState, useEffect, useMemo } from 'react'
import {Pie} from 'react-chartjs-2'
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const defaultData = {
    labels: ["Active", 'Recovered', "Deaths"],
    datasets: [
      {
        label: 'Cases',
        fill: false,
        backgroundColor: ['blue', 'red', 'green'],
        data: [1000, 2000, 3000]
      }
    ]
  }

export const CaseBreakdown = () => {
    const [pieData, setPieData] = useState(defaultData)

    useEffect(() => {
        fetch('https://api.covid19api.com/live/country/south-africa')
        .then(response => {
            return response.json()
        })
        .then(data => {
            const newData = {
                labels: ["Active", 'Recovered', "Deaths"],
                datasets: [
                    {
                        label: 'Cases',
                        fill: false,
                        backgroundColor: ['blue', 'red', 'green'],
                        data: [data[data.length - 1].Active, data[data.length - 1].Recovered, data[data.length - 1].Deaths]
                    }
                ]   
            }
            setPieData(newData)
        })
        .catch(err => {
            console.log(`There was an error ${err}`)
        })
    }, [])

    return(
        <Pie data={pieData}></Pie>
    )
}
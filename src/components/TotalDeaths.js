import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export const TotalDeaths = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [api, setApi] = useState({})
  const [totalConfirmed, setTotalConfirmed] = useState(0)

  useEffect(() => {
      console.log("This component rendered.")
      fetch('https://covid-api.mmediagroup.fr/v1/cases')
      .then(response => {
          return response.json()
      })
      .then(data => {
          setApi(data)
      })
      .catch(err => {
          console.log(`There was an error ${err}`)
      })
  }, [])

  console.log(api)

  const totalDeaths = Object.entries(api)
  .map(([country, data]) => [country, data.All.deaths])
  .reduce((acc, [country, total]) => acc + total, 0)

  return(
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Total Deaths
        </Typography>
        <Typography variant="h5" component="h2">
          {totalDeaths}
        </Typography>
      </CardContent>
    </Card>
  )

  return(
    <div>

    </div>
  )
}
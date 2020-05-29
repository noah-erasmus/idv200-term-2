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
  }
})

export const TotalConfirmed = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [api, setApi] = useState({})
  const [totalConfirmed, setTotalConfirmed] = useState(0)

  useEffect(() => {
      console.log("This component rendered.")
      fetch('https://api.covid19api.com/summary')
      .then(response => {
          return response.json()
      })
      .then(data => {
          setApi(data)
          setTotalConfirmed(data.Global.TotalConfirmed)
          

      })
      .catch(err => {
          console.log(`There was an error ${err}`)
      })
  }, [])


  return(
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Worldwide Confirmed Cases
        </Typography>
        <Typography variant="h5" component="h2">
          {totalConfirmed}
        </Typography>
      </CardContent>
    </Card>
  )

}

 

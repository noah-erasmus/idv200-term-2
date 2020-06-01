import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Loading } from './Loading';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
})

const countriesStyle = {
  maxHeight: 300,
  overflowY: 'auto',
  listStyle: 'none'
  
}

export const TotalConfirmed = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [api, setApi] = useState({})
  const [totalConfirmed, setTotalConfirmed] = useState(0)
  const [countries, setCountries] = useState([])
  const [percentageIncrease, setPercentageIncrease] = useState(0)
  const [percentageOperator, setPercentageOperator] = useState('+')

  useEffect(() => {
      console.log("This component rendered.")
      fetch('https://api.covid19api.com/summary')
      .then(response => {
          return response.json()
      })
      .then(data => {
          setApi(data)
          setTotalConfirmed(data.Global.TotalConfirmed)
          const percentage = (data.Global.NewConfirmed/data.Global.TotalConfirmed*100).toFixed(2)

          setCountries(data.Countries.sort((a,b) => b.TotalConfirmed - a.TotalConfirmed))


          setPercentageIncrease(percentage)

          if(percentage > 0){
            setPercentageOperator('+')
          }else{
            setPercentageOperator('-')
          }

          console.log(countries)
          

      })
      .catch(err => {
          console.log(`There was an error ${err}`)
      })


  }, [])



  return(
    <Card className={classes.root} variant="outlined">
      <CardContent>

        <Grid container spacing={2}> 

          <Grid item>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            Worldwide Confirmed Cases
            </Typography>
            <Typography variant="h5" component="h2">
              {totalConfirmed}
            </Typography>
          </Grid>

          <Grid item>
            <Typography>
              {percentageOperator}{percentageIncrease}%
            </Typography>
            <Typography>
              from yesterday
            </Typography>
          </Grid>

        </Grid>

        <Grid container >
          <Grid item xl={12}>
            
            
            <ul style={countriesStyle}>
              {countries ? countries.map((c, index) => 
                <li key={index}>
                  <Grid container spacing={2}>
                    <Grid item xl={5}>
                      {c.TotalConfirmed}

                    </Grid>
                    <Grid item xl={5}>
                      {c.Country}

                    </Grid>
                  </Grid>
                </li>) : <Loading/>}
            </ul>
            
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

 

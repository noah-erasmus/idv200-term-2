import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import { Loading } from './Loading';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
})

const countriesStyle = {
  maxHeight: 600,
  overflowY: 'auto',
  overflowX: 'hidden',
  listStyle: 'none'

}

const countryBoxesStyle = {
  float: 'left'
}

const totalStyle = {
  marginLeft: '50px'
}

const percentageStyle = {
  marginTop: '10px',
  colour: 'red'
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
        const percentage = (data.Global.NewConfirmed / data.Global.TotalConfirmed * 100).toFixed(2)

        setCountries(data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed))


        setPercentageIncrease(percentage)

        if (percentage > 0) {
          setPercentageOperator('+')
        } else {
          setPercentageOperator('-')
        }

        console.log(countries)


      })
      .catch(err => {
        console.log(`There was an error ${err}`)
      })


  }, [])



  return (
    <div>
      <Grid container spacing={2}>

        <Grid item>
          <Box color='#496CC4' style={totalStyle}>
            <Typography variant="h2" component="h2">
              {totalConfirmed}
            </Typography>
          </Box>

        </Grid>

        <Grid item>
          <Box style={percentageStyle}>
            <Typography variant='h5'>
              {percentageOperator}{percentageIncrease}% from yesterday
            </Typography>

          </Box>

        </Grid>

      </Grid>

      <Grid container >
        <Grid item xl={12}>


          <ul style={countriesStyle}>
            {countries ? countries.map((c, index) =>
              <li key={index}>
                <Grid container spacing={2}>
                  <Grid item xl={12}>
                    <Box fontSize={18} fontWeight='fontWeightBold' color='#496CC4' style={countryBoxesStyle}>
                      {c.TotalConfirmed}
                    </Box>
                    <Box fontSize={16} style={countryBoxesStyle}>
                      {c.Country}

                    </Box>


                  </Grid>

                </Grid>
              </li>) : <Loading />}
          </ul>

        </Grid>
      </Grid>

    </div>

  )

}



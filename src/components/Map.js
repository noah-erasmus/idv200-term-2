import React, { useRef, useEffect, useState } from 'react'
import {coordinates} from '../CountryCoordinates'
import { Legend } from './Legend'


export const CovidMap = () => {
    const [initialState, setInitialState] = useState({
        countries_data: [],
        data_loaded: false,
        colors: [
            "rgba(5, 155, 247, 0.7)",
            "rgba(233,30,99,0.7)",
            "rgba(53,211,156,0.7)",
        ],
        fields: ["confirmed", "deaths", "recovered"],
        query: "confirmed",
    })

    const {colors, countries_data, data_loaded, fields, query} = useState()

    const [countriesData, setCountriesData] = useState()

    useEffect(() => {
        fetch('https://corona-api.com/countries')
        .then(response => {
            return response.json()
        })
        .then(data => {
            const processed = []


            for(const d of data){
                const obj = {
                    name: d.name,
                    code: d.code,
                    flag: `https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${d.code.toLowerCase()}.svg`,
                    updated_at: d.updated_at,
                    confirmed: d.latest_data.confirmed,
                    deaths: d.latest_data.deaths,
                    recovered: d.latest_data.recovered
                }

                obj['coordinates'] = {
                    latitude: coordinates.find(f => f.country_code === data.code) !== undefined ? coordinates.find(f => f.country_code === data.code).latlng[0]:0,
    
                    longitude: coordinates.find(f => f.country_code === data.code) !== undefined ? coordinates.find(f => f.country_code === data.code).latlng[1]:0,
                }

                processed.push(obj)

                

            }

            setCountriesData(processed)
        })
        .catch(err => {
            console.log(`There was an error ${err}`)
        })
        return data_loaded ? (
            <div className='root'>
                <Legend colors={colors} fields={fields} query={query} handleSelectLegend={this.handleSetQuery}/>
            </div>
        ) : null
    }, [])
}
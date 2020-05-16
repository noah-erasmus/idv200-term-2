import React, { useState, useEffect } from 'react'

export const TotalConfirmed = () => {
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

    const totalConfirmedCases = Object.entries(api)
    .map(([country, data]) => [country, data.All.confirmed])
    .reduce((acc, [country, total]) => acc + total, 0)

    console.log(totalConfirmedCases)
    
    return (
        <div style={{textAlign:"left"}}>
            
        </div>
    )
}

 

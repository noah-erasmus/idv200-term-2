import React, { useState, useEffect } from 'react'

export const TotalConfirmed = () => {
    const [api, setApi] = useState({})
    const [otalConfirmed, setTotalConfirmed] = useState(0)

    useEffect(() => {
        console.log("This component rendered.")
        fetch('https://covid-api.mmediagroup.fr/v1/cases')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setApi(data)
            console.log(data)
        })
        .catch(err => {
            console.log(`There was an error ${err}`)
        })
    }, [])

    useEffect(() => {
        const confirmedCases = Object.keys(api).map(key => ({...api[key], name:key}))   
        console.log(confirmedCases)
        
    }, [api])

    return (
        <div style={{textAlign:"left"}}>
            
        </div>
    )
}

 

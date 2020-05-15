import React, { useState, useEffect } from 'react'

export const CovidTest = () => {
    const [test, setTest] = useState([])

    useEffect(() => {
        console.log("This component rendered.")
        fetch('https://covid-api.mmediagroup.fr/v1/cases')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            setTest(data)
            console.log(test)
        })
        .catch(err => {
            console.log(`There was an error ${err}`)
        })
    }, [])

    return (
        <div style={{textAlign:"left"}}>
            <pre>{JSON.stringify(test, null, 2)}</pre>
        </div>
    )
}

 

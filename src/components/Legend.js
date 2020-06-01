import React, { useRef, useEffect, useState } from 'react'

export const Legend = () => {
    const {colors, fields, query} = useState()

    handleSelectLegend = (label) => {
        this.props.handleSelectLegend(label)
    }

    return(
        <div className='legend'>
            {fields.map((field, index) => (
                <div className='legend-field' key={index} onClick={this.handleSelectLegend.bind(this, field)}>
                    <div className={`legend-icon ${query === field ? 'legend-icon-active' : ''}`} style={{backgroundColor: colors[index]}}></div>
                    <div className={`legend-label ${query === field ? 'legend-label-active': ''}`}>
                        {field}
                    </div>
                </div>
            ))}
        </div>
    )
}
import React from 'react'

import Bar from "./Bar";
import './CSS/Chart.css'

export default function Chart(props) {
    const dataPointValues = props.dataPoints.map(ele => {return ele.value})
    const totalMaximum = Math.max(...dataPointValues);
    console.log(dataPointValues)

    return (
        <div className='chart'>
            {
                props.dataPoints.map(bar =>
                    <Bar key={bar.label} value={bar.value} maxValue={totalMaximum} label={bar.label}/>
                ) 
            }
        </div>
    )
}

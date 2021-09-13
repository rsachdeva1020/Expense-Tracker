import React from 'react'

import Bar from "./Bar";

export default function Chart(props) {
    return (
        <div>
            {
                props.dataPoints.map(bar => {
                    <Bar key={bar.label} value={bar.value} maxValue={null} label={bar.label}/>
                }) 
            }
        </div>
    )
}

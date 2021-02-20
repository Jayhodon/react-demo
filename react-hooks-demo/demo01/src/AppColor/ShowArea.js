import React, { useContext } from 'react'
import { ColorContext } from './Color'

function ShowArea() {
    const {state} = useContext(ColorContext);
    return (
        <div style={{color:state}}>字体颜色为{state}</div>
    )
}

export default ShowArea


import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './Color'

function Buttons() {
    const { action } = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => { action({ type: UPDATE_COLOR, color: "red" }) }}>红色</button>
            <button onClick={() => { action({ type: UPDATE_COLOR, color: "yellow" }) }}>黄色</button>
        </div>
    )
}

export default Buttons
import React, { createContext, useReducer } from 'react'
import axios from 'axios'
export const ColorContext = createContext();
export const UPDATE_COLOR = "UPDATE_COLOR";

const render = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            axios.get('https://www.fastmock.site/mock/128d7ac47d17d7520511dcbdc8c52c42/react_demo/data')
                .then((res) => { console.log('axios 获取数据成功:' + JSON.stringify(res.data.data)) })
                .catch((error) => { console.log('axios 获取数据失败' + error) })
            return action.color;
        default:
            return state;
    }
}

export const Color = props=>{
    const initState = "blue"
    const [state,action] = useReducer(render,initState)
    return(
        <ColorContext.Provider value={{state,action}}>
            {props.children}
        </ColorContext.Provider>
    )
}

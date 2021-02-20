import {HANDLE_TODOKEYDOWN}  from '../store/actionType'

export const TodoKeyDownAction = (event:any)=>({
    type:HANDLE_TODOKEYDOWN,
    event
})



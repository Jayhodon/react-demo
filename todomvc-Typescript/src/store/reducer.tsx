import { HANDLE_TODOKEYDOWN} from '../store/actionType'
interface ITodo{
    id:number,
    title:string,
    completed:boolean,
}
const defaultState = {
    todos: [
        { id: 1, title: "打邓伟", completed: true },
        { id: 2, title: "捶邓伟", completed: false },
        { id: 3, title: "扇邓伟", completed: true }
    ],
    value:{}
}
export default (state = defaultState, action: any) => {
    if (action.type === HANDLE_TODOKEYDOWN) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        console.log(newState);
        const target: any = action.event.target;
        const keyCode = action.event.key;
        if (keyCode !== "Enter") {
            return
        }
        const inputText = target.value.trim()
        if (!inputText.length) {
            return
        }
        const lastTodo = newState.todos[newState.todos.length - 1]
        console.log(newState);
        if (lastTodo) {
            newState.todos.map((todo:ITodo) => {
                todo.id++;
            })
        }
        newState.todos.unshift({
            id: 1,
            title: inputText,
            completed: false,
        })
        console.log(newState);
        target.value = ""
        return newState
    }
    return state
}

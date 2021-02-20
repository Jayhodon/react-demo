import * as React from "react"

interface ITodo {
    id: number,
    title: string,
    completed: boolean
}


interface IProps {
    todos: Array<ITodo>,
    showElem: number,
    toggleAll: boolean,
    handleSetState: Function,
    handleItemLeft: Function,
    handleToggleAll: Function
}

interface IAppState { todos: Array<ITodo> }

export class All extends React.Component<IProps> {

    public state : IAppState

    constructor(props:IProps) {
        super(props)
        this.state = {
            todos: this.props.todos
        }
    }

    getChecked = (targetEvent:React.FormEvent) => {
        const target:any= targetEvent.target;
        const id = target.id
        var itemLeft = 0;
        console.log(id);
        this.state.todos.forEach(todo => {
            if (todo.id == id) todo.completed = !todo.completed
            if (todo.completed == true) itemLeft++
        });
        this.props.handleSetState(this.state.todos)
        this.props.handleItemLeft(itemLeft)
    }

    
    getToggleAll = () => {
        var toggleAll = this.props.toggleAll
        if (toggleAll == false)
            this.state.todos.forEach(todo => {
                todo.completed = true
            });
        else
            this.state.todos.forEach(todo => {
                todo.completed = false
            });
        toggleAll = !toggleAll
        this.props.handleToggleAll(this.state.todos, toggleAll)
    }

 
    destroyTodo = (targetEvent:React.FormEvent) => {
        const target:any= targetEvent.target;
        const id = target.id
        console.log(id);
        this.state.todos.splice(id - 1, 1)
        for (var i = id - 1; i < this.state.todos.length; i++) this.state.todos[i].id--
        this.props.handleSetState(this.state.todos)
    }

    getTodoList() {
        return this.state.todos.map(todo => {
            if (todo.completed == true) return (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                    <div className="view">
                        <input id={String(todo.id)} className="toggle" type="checkbox" checked={todo.completed} onChange={this.getChecked} />
                        <label>{todo.title}</label>
                        <button id={String(todo.id)} className="destroy" onClick={this.destroyTodo}></button>
                    </div>
                    <input className="edit" defaultValue="Create a TodoMVC template" />
                </li>
            )

        })
    }

    render() {
        return (
            (this.props.showElem == 3) ? (
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all" onClick={this.getToggleAll} >Mark all as complete</label>
                    <ul className="todo-list">
                        {this.getTodoList()}
                    </ul>
                </section>) : null
        )
    }
}

export default All;
import React, { Component } from 'react';

class All extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: this.props.todos
        }
    }

    getChecked = () => {
        const id = event.target.id
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

    destroyTodo = () => {
        const id = event.target.id
        console.log(id);
        this.state.todos.splice(id - 1, 1)
        for (var i = id - 1; i < this.state.todos.length; i++)this.state.todos[i].id--
        this.props.handleSetState(this.state.todos)
    }

    getTodoList() {
        return this.state.todos.map(todo => {
            if (todo.completed == false) return (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                    <div className="view">
                        <input id={todo.id} className="toggle" type="checkbox" checked={todo.completed} onChange={this.getChecked} />
                        <label>{todo.title}</label>
                        <button id={todo.id} className="destroy" onClick={this.destroyTodo}></button>
                    </div>
                    <input className="edit" defaultValue="Create a TodoMVC template" />
                </li>
            )

        })
    }

    render() {
        return (
            (this.props.showElem == 2) ? (
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
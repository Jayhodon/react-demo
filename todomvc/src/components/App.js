import React, { Component } from 'react';
import All from './All'
import Active from './Active'
import Completed from './Completed'
import Footer from './Footer'

const todos = [
    { id: 1, title: "Todo 1", completed: true },
    { id: 2, title: "Todo 2", completed: false },
    { id: 3, title: "Todo 3", completed: true },
]

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos:todos,
            itemLeft:"",
            showElem:1,
            toggleAll:false
        }
    }
    render() {
        return (
            <div>
                <section className="todoapp">
                    <header className="header">
                        <h1>todos</h1>
                        <input className="new-todo"
                            onKeyDown={this.handleNewTodoKeyDown.bind(this)}
                            placeholder="What needs to be done?"
                            autoFocus
                        />
                    </header>

                    {
                        this.state.todos.length > 0 && (
                            <div>
                                <All
                                    todos={this.state.todos}
                                    showElem = {this.state.showElem}
                                    toggleAll = {this.state.toggleAll}
                                    handleSetState={this.handleSetState}
                                    handleItemLeft={this.handleItemLeft}
                                    handleToggleAll = {this.handleToggleAll}
                                />
                                <Active
                                    todos={this.state.todos}
                                    showElem = {this.state.showElem}
                                    toggleAll = {this.state.toggleAll}
                                    handleSetState={this.handleSetState}
                                    handleItemLeft={this.handleItemLeft}
                                    handleToggleAll = {this.handleToggleAll}
                                />
                                <Completed
                                    todos={this.state.todos}
                                    showElem = {this.state.showElem}
                                    toggleAll = {this.state.toggleAll}
                                    handleSetState={this.handleSetState}
                                    handleItemLeft={this.handleItemLeft}
                                    handleToggleAll = {this.handleToggleAll}
                                />

                                <Footer todos={this.state.todos}
                                    itemLeft={this.state.itemLeft}
                                    handleSetState={this.handleSetState}
                                    handleShowElem = {this.handleShowElem}
                                />
                            </div>
                        )
                    }
                </section>
                
                <footer className="info">
                    <p>Double-click to edit a todo</p>
                    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
                    <p>Created by <a href="http://todomvc.com">you</a></p>
                    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
                </footer>
            </div>
        )
    }

    handleNewTodoKeyDown(event) {

        const { target, keyCode } = event
        if (keyCode !== 13) {
            return
        }

        const inputText = target.value.trim()
        if (!inputText.length) {
            return
        }

        const lastTodo = this.state.todos[this.state.todos.length - 1]

        if (lastTodo) {
            this.state.todos.map(todo => {
                todo.id++;
            })
        }

        this.state.todos.unshift({
            id: 1,
            title: inputText,
            completed: false
        })
        console.log(this.state.todos);

        this.setState({
            todos: this.state.todos
        })

        target.value = ""

    }

    handleSetState = (todo) => {
        this.setState({
            todos: todo
        })
    }

    handleShowElem = (showElem) =>{
        this.setState({
            showElem: showElem
        })
    }

    handleItemLeft = (itemLeft) => {
        this.setState({
            itemLeft: this.state.todos.length-itemLeft
        })
    }

    handleToggleAll=(todo,toggleAll)=>{
        this.setState({
            todos: todo,
            toggleAll: toggleAll
        })
    }

}

export default App;
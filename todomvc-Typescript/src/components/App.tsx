import * as React from "react"
import All from './All'
import Active from './Active'
import Completed from './Completed'
import Footer from './Footer'

import store from '../store'
import {TodoKeyDownAction} from '../store/actionCreators'

interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

interface IState {
    todos: Array<ITodo>,
    itemLeft: number,
    showElem: number,
    toggleAll: boolean
}

interface components {
    todos: Array<ITodo>
    showElem: number
    toggleAll: boolean
    handleSetState: Function
    handleItemLeft: Function
    handleToggleAll: Function
}

interface IAppState { todos: Array<ITodo> }

export class App extends React.Component{

    public state: IState

    constructor(props:IAppState) {
        super(props)
        this.state = {
            todos: props.todos,
            itemLeft: 0,
            showElem: 1,
            toggleAll: false
        }
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() {
        return (
            <div>
                <section className="todoapp">
                    <header className="header">
                        <h1>todos</h1>
                        <input className="new-todo"
                            onKeyDown={this.handleNewTodoKeyDown.bind(this)}
                            placeholder={"What needs to be done?"}
                            autoFocus
                        />
                    </header>

                    {
                        this.state.todos.length > 0 && (
                            <div>
                                <All
                                    todos={this.state.todos}
                                    showElem={this.state.showElem}
                                    toggleAll={this.state.toggleAll}
                                    handleSetState={this.handleSetState}
                                    handleItemLeft={this.handleItemLeft}
                                    handleToggleAll={this.handleToggleAll}
                                />
                                <Active
                                    todos={this.state.todos}
                                    showElem={this.state.showElem}
                                    toggleAll={this.state.toggleAll}
                                    handleSetState={this.handleSetState}
                                    handleItemLeft={this.handleItemLeft}
                                    handleToggleAll={this.handleToggleAll}
                                />
                                <Completed
                                    todos={this.state.todos}
                                    showElem={this.state.showElem}
                                    toggleAll={this.state.toggleAll}
                                    handleSetState={this.handleSetState}
                                    handleItemLeft={this.handleItemLeft}
                                    handleToggleAll={this.handleToggleAll}
                                />

                                <Footer todos={this.state.todos}
                                    itemLeft={this.state.itemLeft}
                                    handleSetState={this.handleSetState}
                                    handleShowElem={this.handleShowElem}
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

    storeChange() {
        console.log(store.getState())
        this.setState(store.getState())
        console.log(this.state.todos);
        
    }

    handleNewTodoKeyDown(event: any) {
        const action = TodoKeyDownAction(event)
        console.log(action);
        store.dispatch(action);
    }

    handleSetState = (todo: []) => {
        this.setState({
            todos: todo
        })
    }

    handleShowElem = (showElem: number) => {
        this.setState({
            showElem: showElem
        })
    }

    handleItemLeft = (itemLeft: number) => {
        this.setState({
            itemLeft: this.state.todos.length - itemLeft
        })
    }

    handleToggleAll = (todo: [], toggleAll: boolean) => {
        this.setState({
            todos: todo,
            toggleAll: toggleAll
        })
    }

}

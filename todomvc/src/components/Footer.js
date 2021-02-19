import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: this.props.todos
        }
    }

    handleClearComletde = () => {
        this.props.handleSetState([])
    }

    handleShowElem = (event) => {
        switch (event.target.id) {
            case "All":
                this.props.handleShowElem(1)
                break;
            case "Active":
                this.props.handleShowElem(2)
                break;
            case "Completed":
                this.props.handleShowElem(3)
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <footer className="footer">

                <span className="todo-count"><strong>{this.props.itemLeft}</strong> item left</span>
                <Router>
                    <ul className="filters">
                        <li>
                            {/* <Link to='/'>All</Link> */}
                            <a id="All" href="#/" onClick={this.handleShowElem}>All</a>
                        </li>
                        <li>
                            {/* <Link to='/active'>Active</Link> */}
                            <a id="Active" href="#/active"onClick={this.handleShowElem} >Active</a>
                        </li>
                        <li>
                            {/* <Link to='/completed'>Completed</Link> */}
                            <a id="Completed" href="#/completed" onClick={this.handleShowElem} >Completed</a>
                        </li>
                    </ul>
                    {/* <Route path="/" exact />
                    <Route path="/active" />
                    <Route path="/completed" /> */}
                </Router>
                <button className="clear-completed" onClick={this.handleClearComletde} >Clear completed</button>
            </footer>
        )
    }
}

export default Footer;
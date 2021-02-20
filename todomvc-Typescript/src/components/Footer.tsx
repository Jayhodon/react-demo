import * as React from "react"


interface ITodo {
    id: number,
    title: string,
    completed: boolean
}


interface IProps {
    todos: Array<ITodo>,
    itemLeft: number,
    handleSetState: Function,
    handleShowElem: Function
}

interface IAppState { todos: Array<ITodo> }

export class Footer extends React.Component <IProps> {

    public state:IAppState

    constructor(props:IProps) {
        super(props)
        this.state = {
            todos: this.props.todos
        }
    }

    handleClearComletde = () => {
        this.props.handleSetState([])
    }

    handleShowElem = (targetEvent:React.FormEvent) => {
        const target:any= targetEvent.target;
        switch (target.id) {
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
                {/* <Router> */}
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
                    <Route path="/completed" />
                </Router> */}
                <button className="clear-completed" onClick={this.handleClearComletde} >Clear completed</button>
            </footer>
        )
    }
}

export default Footer;
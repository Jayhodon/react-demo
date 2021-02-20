import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const CountContext = createContext();

function Index() {
    useEffect(() => {
        console.log("你进来了Index");
        return () => {
            console.log("你咋离开了Index")
        }
    }, [])
    return <h1>Index</h1>
}

function List() {
    useEffect(() => {
        console.log("你进来了List");
        return () => {
            console.log("你咋离开了List")
        }
    }, [])
    let count = useContext(CountContext)
    return <h1>list{count}</h1>
}

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect=>${count}`);
        return () => {
            console.log("=============================")
        }
    }, [count])
    return (
        <div>
            <p> click {count}</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <CountContext.Provider value={count}>
                    <List />
                </CountContext.Provider>

                <Route path="/" exact component={Index} />
                <Route path="/list/" exact component={List} />
            </Router>
        </div>
    );
}

export default App;
import React from 'react';
// import routing features
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'; 
// {<Chat chatId="7c40c1cc-d0b4-45d6-972d-a48d12e51d71"/>}
// Import components
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Chats from './pages/Chats.js';

// import app styles
import './styles/app.css';

const history = createBrowserHistory();
console.log(history);

class App extends React.Component{
    constructor(props){
        super(props);
        this.history = this.props.history; 
    }

    render(){
        return (
                <>
                    <Router>
                        <Header />
                        <Link to="/chats"> Chats </Link>
                        <Switch>
                            <Route path="/" component={Home} />
                            <Route path="/chats" component={Chats} />
                        </Switch>
                    </Router>
                </>
            )
    }
}
export default App;
import React from 'react';
// import routing features
import {
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// {<Chat chatId="7c40c1cc-d0b4-45d6-972d-a48d12e51d71"/>}
// Import components
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Chats from './pages/Chats.js';
import Chat from './components/Chat.js';

// import app styles
import './styles/app.css';


class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
                <Router history={this.history}>
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/chats" exact>
                            <Chats baseUrl="api/v1/" userId="2e234bee-e83c-4081-ad0d-207ef6a8c10a"/>
                        </Route>
                        <Route path="/chats/:chatId" component={Chat} />
                    </Switch>
                </Router>
            )
    }
}
export default App;
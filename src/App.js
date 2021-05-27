import React from 'react';
// import routing features
import {
    Route,
    Switch,
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


// Import components
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Chats from './pages/Chats.js';
import Chat from './components/Chat.js';

// import state requirements
import { useSelector, useDispatch } from 'react-redux';
import { changeUserObject, changeToken } from './store/actions.js';




// import app styles
import './styles/app.css';


class App extends React.Component{
    constructor(props){
        super(props);
        this.user = useSelector(state => state.user)
        this.dispatch = useDispatch() 
    }

    render(){
        return (
                
                <Router>
                    <Header />
                    {this.user.token === null ? LoggingPage : (
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/chats">
                                <Chats baseUrl="api/v1/" userId="2e234bee-e83c-4081-ad0d-207ef6a8c10a"/>
                            </Route>
                            <Route path="/chats/:chatId/" component={Chat} exact/>
                            
                        </Switch>
                    )}
                </Router>
                
            )
    }
}
export default App;
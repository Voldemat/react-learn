import React from 'react';
// import routing features
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


// Import components
import Header from './components/Header.js';
import Home from './pages/Home.js';
import ChatsPage from './pages/Chats.js';
import LoggingPage from './pages/LoggingPage';
import Chat from './components/Chat.js';

// import state requirements
import { useSelector, useDispatch } from 'react-redux';
import setToken from './store/actions/setToken.js';





// import app styles
import './styles/app.css';


function App(){
    const user = useSelector(state => state.user);
    return (
            
            <Router>
                <Header />
                
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/chats">
                        <ChatsPage />
                    </Route>
                    <Route path="/chats/:chatId/" component={Chat} exact/>
                    <Route path="/login" component={LoggingPage} exact/>
                </Switch>
                {user.token === null || user.token === undefined ? <Redirect to="/login" /> : <h1>{user.token}</h1>}
            </Router>
            
        )
}
export default App;
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
import HomePage from './pages/Home.js';
import LoggingPage from './pages/LoggingPage';
import LogOutPage from './pages/LogoutPage.js';
import RegistrationPage from './pages/RegistrationPage.js';
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
                    <Route path="/" component={HomePage} exact />
                    <Route path="/chats/:chatId/" component={Chat} exact/>
                    <Route path="/login" component={LoggingPage} exact/>
                    <Route path="/logout" component={LogOutPage} exact/>
                    <Route path="/registration" component={RegistrationPage} exact />
                </Switch>
                {user.token === null || user.token === undefined ? <Redirect to="/login" /> : ""}
            </Router>
            
        )
}
export default App;
import React from 'react';
import '../styles/header.css';

import { Link } from 'react-router-dom';



class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
                <header>
                    <Link to="/" className="logo">
                        Union
                    </Link>
                    <Link to="/chats">
                        Chats
                    </Link>
                    <Link to="/contacts">
                        Contacts
                    </Link>
                    <Link to="/settings">
                        Settings
                    </Link>
                </header>
            )
    }
}

export default Header
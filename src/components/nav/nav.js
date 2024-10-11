import '../../assets/css/nav.css';
import logo from '../../logo.svg';
import '../../App.css';
import React from 'react';
import TextScrambleComponent from './hello';

function Nav() {
    return (
        <div className="grid-nav">
            <div className='name'>
                <p>
                    <span>
                        <TextScrambleComponent />
                    </span>
                </p>
            </div>
            <div className="nav-logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='nav'>
                <div className="navbar">
                    <a className="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a>
                    <a href="#"><i className="fa fa-fw fa-search"></i> Search</a>
                    <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
                    <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
                </div>
            </div>
        </div>
    );
}
export default Nav;
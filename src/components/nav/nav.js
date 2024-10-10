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
            <div className='grid-nav-meun'>
                <div>
                    <h1>Home</h1>
                </div>
                <div>
                    <h1>HtmlCssJs</h1>
                </div>
                <div>
                    <h1>React</h1>
                </div>
            </div>
        </div>
    );
}
export default Nav;
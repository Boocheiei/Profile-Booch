import Nav from './components/nav/nav';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Topnav from './components/topnav/topnav';
import React from 'react';

function App() {
  return (
    <div>
        <Topnav/>
        <Nav/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './screens/Home';
import Analysis from './screens/Analysis';
import AboutUs from './screens/AboutUs';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='side-bar'>
          <div className='title-container'>Dashboard</div>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <div className='side-bar-button'>
              Home
            </div>
          </Link>
          <Link to={'/analysis'} style={{ textDecoration: 'none' }}>
            <div className='side-bar-button'>
              Analysis
            </div>
          </Link>
          <Link to={'/aboutus'} style={{ textDecoration: 'none' }}>
            <div className='side-bar-button'>
              About us
            </div>
          </Link>
        </div>
        <div className='main'>

          <Route path={'/'} component={Home} exact />
          <Route path={'/analysis'} component={Analysis} />
          <Route path={'/aboutus'} component={AboutUs} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

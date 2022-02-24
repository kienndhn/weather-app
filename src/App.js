import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './screens/Home';
import Analysis from './screens/Analysis';
import AboutUs from './screens/AboutUs';
import SideBar from './components/SideBar';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
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

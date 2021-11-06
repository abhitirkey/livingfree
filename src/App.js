import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import HomepageHeader from './components/Header/HomepageHeader'
import Homepage from './components/Pages/Homepage'
import RegionalPage from './components/Pages/RegionalPage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HomepageHeader/>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/regional' exact component={RegionalPage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

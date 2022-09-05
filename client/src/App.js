import './App.css';
import React from 'react';
import Main from './components/Main';
import New from './components/New';

// import Update from './components/Update';
import Details from './components/Details';

import {
  BrowserRouter, Route, Switch
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/pirates">
          <Main />
        </Route>
         <Route path="/pirate/:id">
          <Details />
         </Route>
        <Route exact path="/new">
          <New />
        </Route> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

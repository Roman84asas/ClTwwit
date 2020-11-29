import React from 'react';
import {Route, Switch } from 'react-router-dom';
import SignIn from "./pages/Signin";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" component={Home}/>
          <Route path="/signin" component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;

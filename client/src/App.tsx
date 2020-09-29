import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* pages */
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" render={() => <Home></Home>}></Route>
      </Switch>
    </div>
  );
}

export default App;

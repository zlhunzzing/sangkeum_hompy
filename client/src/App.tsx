import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Guestbook from './page/Guestbook';

/* pages */
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/guestbook" render={() => <Guestbook></Guestbook>}></Route>
        <Route path="/" render={() => <Home></Home>}></Route>
      </Switch>
    </div>
  );
}

export default App;

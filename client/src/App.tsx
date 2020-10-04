import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Guestbook from './page/Guestbook';

/* pages */
import Home from './page/Home';

// function toggleFullScreen() {
//   if (!document.fullscreenElement) {
//     document.documentElement.requestFullscreen();
//   } else {
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     }
//   }
// }

// document.addEventListener(
//   'keypress',
//   function (e) {
//     if (e.keyCode === 13) {
//       toggleFullScreen();
//     }
//   },
//   false,
// );

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

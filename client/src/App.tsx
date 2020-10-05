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

// function openWindow() {
//   window.open(
//     'http://localhost:3000',
//     'sangkeum',
//     /*'toolbar=0, location=0, status=0, menubar=0, scrollbars=1, resizable=1, top=10, left=20,*/ 'width=900, height=680',
//   );
// }

// document.addEventListener(
//   'keypress',
//   function (e) {
//     if (e.keyCode === 13) {
//       openWindow();
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

import React from 'react';
import MenuComponent from '../component/MenuComponent';

export default function GuestbookView() {
  return (
    <div className="wrapping">
      <div className="cover">
        <div className="content">
          <span className="sideContent"></span>
          <div className="mainContent"></div>
          <MenuComponent></MenuComponent>
        </div>
      </div>
    </div>
  );
}

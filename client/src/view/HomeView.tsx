import React from 'react';
import MiniRoomComponent from '../component/MiniRoomComponent';
import MenuComponent from '../component/MenuComponent';
import ProfileComponent from '../component/ProfileComponent';

export default function HomeView() {
  return (
    <div className="wrapping">
      <div className="cover">
        <div className="content">
          <span className="sideContent">
            <ProfileComponent></ProfileComponent>
          </span>
          <div className="hompyTitle">홈 화면 입니다</div>
          <div className="mainContent">
            <MiniRoomComponent></MiniRoomComponent>
          </div>
          <MenuComponent></MenuComponent>
        </div>
      </div>
    </div>
  );
}

import React /*,{ useState }*/ from 'react';
import ProfileComponent from '../component/ProfileComponent';

export default function HomeView() {
  return (
    <div className="wrapping">
      <div className="cover">
        <div className="content">
          <ProfileComponent></ProfileComponent>
        </div>
      </div>
    </div>
  );
}

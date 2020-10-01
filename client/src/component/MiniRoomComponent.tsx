import React /*, { useState }*/ from 'react';

export default function MiniRoomComponent() {
  return (
    <div style={{ margin: '15px' }}>
      <div style={{ textAlign: 'left', paddingLeft: '5px' }}>Mini Room</div>
      <div
        className="miniRoom"
        style={{
          border: '1px solid black',
          width: '99%',
          height: '200px',
        }}
      ></div>
    </div>
  );
}

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function MenuComponent() {
  const [currentPage, setCurrentPage] = useState(document.location.pathname);
  const history = useState(useHistory())[0];

  return (
    <span
      style={{
        position: 'absolute',
        marginTop: '90px',
        marginLeft: '-7px',
      }}
    >
      <li
        className={currentPage === '/' ? 'currentMenu' : 'uncurrentMenu'}
        onClick={() => {
          setCurrentPage('/');
          history.push('/');
        }}
      >
        <hr style={{ marginTop: '0', opacity: '0' }}></hr>
        Home
      </li>
      <li
        className={
          currentPage === '/guestbook' ? 'currentMenu' : 'uncurrentMenu'
        }
        onClick={() => {
          setCurrentPage('/guestbook');
          history.push('/guestbook');
        }}
      >
        <hr style={{ marginTop: '0', opacity: '0' }}></hr>
        방명록
      </li>
    </span>
  );
}

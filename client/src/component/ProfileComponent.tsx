import React, { useState } from 'react';

export default function ProfileComponent() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [content, setContent] = useState('안녕하세요');

  return (
    <span className="profileBox">
      <div className="profileImage"></div>
      <br></br>
      {!isUpdate ? (
        <div>
          {content}
          <br></br>
          <br></br>
          <button
            className="profileInput"
            onClick={() => {
              setIsUpdate(true);
            }}
          >
            수정
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsUpdate(false);
          }}
        >
          <textarea onChange={({ target: { value } }) => setContent(value)}>
            {content}
          </textarea>
          <button className="profileInput"></button>
        </form>
      )}
    </span>
  );
}

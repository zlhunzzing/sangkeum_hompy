import React, { useState } from 'react';

export default function ProfileComponent() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [content, setContent] = useState('안녕하세요');

  return (
    <span>
      <div
        className="profileImage"
        style={{
          margin: '0 auto',
          marginTop: '15px',
          width: '140px',
          height: '140px',
          borderRadius: '100px',
          backgroundColor: 'rgb(240, 240, 240)',
        }}
      ></div>
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
            style={{
              bottom: '0%',
              width: '50px',
              height: '30px',
              border: '0px',
              borderRadius: '3px',
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

import React, { Dispatch } from 'react';
import MenuComponent from '../component/MenuComponent';
import ProfileComponent from '../component/ProfileComponent';

interface Props {
  comment: string;
  setComment: Dispatch<string>;
  comments: Array<any>;
  setComments: Dispatch<any>;
}

const GuestbookView: React.FunctionComponent<Props> = ({
  comment,
  setComment,
  comments,
  setComments,
}: Props) => (
  <div className="wrapping">
    <div className="cover">
      <div className="content">
        <span className="sideContent">
          <ProfileComponent></ProfileComponent>
        </span>

        <div className="mainContent">
          <div style={{ margin: '15px' }}>
            <div style={{ textAlign: 'left', paddingLeft: '5px' }}>
              Guestbook
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                comments.push(comment);
                setComments(comments.slice(0, comments.length));
              }}
              style={{ display: 'inline-block' }}
            >
              <input
                type="text"
                style={{
                  width: '400px',
                  height: '40px',
                  float: 'left',
                }}
                onChange={({ target: { value } }) => setComment(value)}
              ></input>
              <button
                style={{
                  width: '55px',
                  height: '46px',
                  float: 'left',
                }}
              >
                입력
              </button>
            </form>
            <div style={{ borderTop: '1px solid gray', width: '100%' }}></div>
            {comments
              ? comments.map((comment: string, id: number) => (
                  <div key={id}>
                    <div style={{ textAlign: 'left' }}>{comment}</div>
                    <div
                      style={{ borderTop: '1px solid gray', width: '100%' }}
                    ></div>
                  </div>
                ))
              : null}
          </div>
        </div>

        <MenuComponent></MenuComponent>
      </div>
    </div>
  </div>
);

export default GuestbookView;

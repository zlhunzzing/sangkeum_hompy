import React, { useState } from 'react';
import GuestbookView from '../view/GuestbookView';

export default function GuestbookContainer() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(['안녕', '그래 안녕']);

  return (
    <GuestbookView
      comment={comment}
      setComment={setComment}
      comments={comments}
      setComments={setComments}
    />
  );
}

import React from 'react';
import './CommentList';

const CommentList = (props) => {
  const { comments } = props;
  const CommentList = comments.map((comment, index) => {
    return(
      <li key={index} className="CommentList-item">{comment}</li>
    );
  });

  return (
    <div>
      <ul>{ CommentList}</ul>
    </div>
  )
};

export default CommentList;
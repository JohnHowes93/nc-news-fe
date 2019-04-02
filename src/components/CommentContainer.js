import React from 'react';

const CommentContainer = props => {
  return props.comments.map(comment => {
    return (
      <div>
        <header>
          <h4>{comment.author}</h4>
          <h5> {comment.created_at}</h5>
          <h6>{comment.votes}</h6>
        </header>
        <article>{comment.body}</article>
      </div>
    );
  });
};

export default CommentContainer;

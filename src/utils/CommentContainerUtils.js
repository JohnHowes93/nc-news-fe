import React from 'react';

export const commentDisplayer = comments => {
  return comments.map(comment => {
    return (
      <div key={comment.comment_id}>
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

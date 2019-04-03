import React from 'react';
import { voteOnComment } from '../api';

export const commentDisplayer = comments => {
  const handleOnClick = event => {
    const postBody = {
      inc_votes: Number(event.currentTarget.value)
    };
    voteOnComment(postBody, event.currentTarget.name).then(comment => {
      console.log(comment);
    });
  };
  return comments.map(comment => {
    return (
      <div key={comment.comment_id}>
        <header>
          <h4>{comment.author}</h4>
          <h5> {comment.created_at}</h5>
          <h6>{comment.votes}</h6>
        </header>
        <article>{comment.body}</article>
        <div className="actions">
          <button
            type="button"
            value="1"
            name={comment.comment_id}
            onClick={handleOnClick}
          >
            <span role="img" aria-label="thumbs up">
              👍
            </span>
          </button>
          <button
            type="button"
            value="-1"
            name={comment.comment_id}
            onClick={handleOnClick}
          >
            <span role="img" aria-label="thumbs down">
              👎
            </span>
          </button>
        </div>
      </div>
    );
  });
};

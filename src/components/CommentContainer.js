import React, { Component } from 'react';

class CommentContainer extends Component {
  state = {
    comments: [
      {
        comment_id: 44,
        votes: 4,
        created_at: '2017-11-20T08:58:48.322Z',
        author: 'grumpy19',
        body:
          'Error est qui id corrupti et quod enim accusantium minus. Deleniti quae ea magni officiis et qui suscipit non.'
      },
      {
        comment_id: 52,
        votes: 10,
        created_at: '2017-07-31T08:14:13.076Z',
        author: 'jessjelly',
        body:
          'Consectetur deleniti sed. Omnis et dolore omnis aspernatur. Et porro accusantium. Tempora ullam voluptatum et rerum.'
      },
      {
        comment_id: 286,
        votes: 19,
        created_at: '2017-07-05T12:15:40.563Z',
        author: 'cooljmessy',
        body:
          'Ut accusamus enim vel voluptate quae temporibus labore neque a. Reprehenderit iste est eos velit fugit vel quod velit.'
      },
      {
        comment_id: 86,
        votes: 14,
        created_at: '2016-09-11T02:59:15.171Z',
        author: 'tickle122',
        body:
          'Et explicabo dignissimos officia dolore rerum aliquam corrupti. Culpa corporis earum et earum officia a est atque at. Quidem quo recusandae delectus autem possimus blanditiis optio. Sed culpa culpa. Exercitationem nemo aspernatur alias ut qui.'
      },
      {
        comment_id: 89,
        votes: 2,
        created_at: '2016-09-05T20:08:14.229Z',
        author: 'cooljmessy',
        body:
          'Esse et expedita harum non. Voluptatibus commodi voluptatem. Minima velit suscipit numquam ea. Id vitae debitis aut incidunt odio quo quam possimus ipsum.'
      },
      {
        comment_id: 85,
        votes: 0,
        created_at: '2016-06-18T08:52:08.680Z',
        author: 'happyamy2016',
        body:
          'Assumenda sit est blanditiis asperiores est minima. Placeat sequi tenetur autem consequatur soluta molestiae. Incidunt neque labore et dolorem et vel possimus nemo quidem.'
      },
      {
        comment_id: 33,
        votes: 4,
        created_at: '2016-05-13T06:34:27.403Z',
        author: 'cooljmessy',
        body:
          'Explicabo perspiciatis voluptatem sunt tenetur maxime aut. Optio totam modi. Perspiciatis et quia.'
      },
      {
        comment_id: 31,
        votes: 11,
        created_at: '2016-02-01T02:29:55.551Z',
        author: 'weegembump',
        body:
          'Sit sequi odio suscipit. Iure quisquam qui alias distinctio eos officia enim aut sit. Corrupti ut praesentium ut iste earum itaque qui. Dolores in ab rerum consequuntur. Id ab aliquid autem dolore.'
      }
    ]
  };
  render() {
    const { comments } = this.state;
    return comments.map(comment => {
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
  }
}

export default CommentContainer;

import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class ArticlesTable extends Component {
  state = {
    data: [
      {
        author: 'weegembump',
        title: 'Seafood substitutions are increasing',
        article_id: 33,
        topic: 'cooking',
        created_at: '2018-05-30T15:59:13.341Z',
        votes: 0,
        comment_count: '6'
      },
      {
        author: 'happyamy2016',
        title: 'High Altitude Cooking',
        article_id: 28,
        topic: 'cooking',
        created_at: '2018-05-27T03:32:28.514Z',
        votes: 0,
        comment_count: '5'
      },
      {
        author: 'jessjelly',
        title:
          'Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams',
        article_id: 30,
        topic: 'cooking',
        created_at: '2018-05-06T02:40:35.489Z',
        votes: 0,
        comment_count: '8'
      },
      {
        author: 'weegembump',
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: 'football',
        created_at: '2018-04-16T19:29:32.774Z',
        votes: 0,
        comment_count: '6'
      },
      {
        author: 'grumpy19',
        title:
          'The People Tracking Every Touch, Pass And Tackle in the World Cup',
        article_id: 18,
        topic: 'football',
        created_at: '2018-03-28T03:03:58.717Z',
        votes: 0,
        comment_count: '8'
      },
      {
        author: 'grumpy19',
        title:
          'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
        article_id: 6,
        topic: 'coding',
        created_at: '2018-03-14T10:27:39.137Z',
        votes: 0,
        comment_count: '11'
      },
      {
        author: 'weegembump',
        title: 'History of FC Barcelona',
        article_id: 16,
        topic: 'football',
        created_at: '2018-02-17T20:38:43.448Z',
        votes: 0,
        comment_count: '16'
      },
      {
        author: 'jessjelly',
        title: 'Making sense of Redux',
        article_id: 4,
        topic: 'coding',
        created_at: '2017-12-24T05:38:51.240Z',
        votes: 0,
        comment_count: '9'
      },
      {
        author: 'tickle122',
        title: 'Designing Better JavaScript APIs',
        article_id: 11,
        topic: 'coding',
        created_at: '2017-11-10T16:41:01.780Z',
        votes: 0,
        comment_count: '5'
      },
      {
        author: 'tickle122',
        title: 'What to Cook This Week',
        article_id: 31,
        topic: 'cooking',
        created_at: '2017-11-05T07:22:43.519Z',
        votes: 0,
        comment_count: '12'
      },
      {
        author: 'tickle122',
        title: 'History of Football',
        article_id: 20,
        topic: 'football',
        created_at: '2017-10-10T08:18:16.497Z',
        votes: 0,
        comment_count: '5'
      },
      {
        author: 'weegembump',
        title: 'Sweet potato & butternut squash soup with lemon & garlic toast',
        article_id: 25,
        topic: 'cooking',
        created_at: '2017-08-18T09:25:14.275Z',
        votes: 0,
        comment_count: '4'
      },
      {
        author: 'grumpy19',
        title: 'The Notorious MSG’s Unlikely Formula For Success',
        article_id: 34,
        topic: 'cooking',
        created_at: '2017-08-16T22:08:30.430Z',
        votes: 0,
        comment_count: '11'
      },
      {
        author: 'grumpy19',
        title: 'Halal food: Keeping pure and true',
        article_id: 32,
        topic: 'cooking',
        created_at: '2017-08-16T07:47:21.660Z',
        votes: 0,
        comment_count: '5'
      },
      {
        author: 'jessjelly',
        title: 'Who are the most followed clubs and players on Instagram?',
        article_id: 19,
        topic: 'football',
        created_at: '2017-07-26T16:49:01.355Z',
        votes: 0,
        comment_count: '13'
      },
      {
        author: 'happyamy2016',
        title: '22 Amazing open source React projects',
        article_id: 3,
        topic: 'coding',
        created_at: '2017-07-21T17:54:10.346Z',
        votes: 0,
        comment_count: '10'
      },
      {
        author: 'jessjelly',
        title:
          "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
        article_id: 2,
        topic: 'coding',
        created_at: '2017-07-20T20:57:53.256Z',
        votes: 0,
        comment_count: '6'
      },
      {
        author: 'tickle122',
        title: 'The battle for Node.js security has only begun',
        article_id: 12,
        topic: 'coding',
        created_at: '2017-07-17T11:34:54.879Z',
        votes: 0,
        comment_count: '7'
      },
      {
        author: 'grumpy19',
        title: 'Thanksgiving Drinks for Everyone',
        article_id: 27,
        topic: 'cooking',
        created_at: '2017-04-23T18:00:55.514Z',
        votes: 0,
        comment_count: '13'
      },
      {
        author: 'weegembump',
        title: 'HOW COOKING HAS CHANGED US',
        article_id: 26,
        topic: 'cooking',
        created_at: '2017-04-21T12:34:54.761Z',
        votes: 0,
        comment_count: '11'
      }
    ],
    columns: [
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Topic',
        accessor: 'topic'
      },
      {
        Header: 'Author',
        accessor: 'author'
      },
      {
        Header: 'Replies',
        accessor: 'comment_count'
      },
      {
        Header: 'Created',
        accessor: 'created_at'
      }
    ]
  };

  render() {
    const { data, columns } = this.state;
    return (
      <div>
        <ReactTable data={data} columns={columns} />
      </div>
    );
  }
}

export default ArticlesTable;

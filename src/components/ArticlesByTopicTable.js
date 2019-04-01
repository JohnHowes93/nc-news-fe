import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from '@reach/router';

const ArticlesByTopicTable = props => {
  console.log(props);
  const input = {
    articles: [
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
      }
    ]
  };
  const data = input.articles.filter(article => article.topic === props.topic);
  const columns = [
    {
      Header: 'Title',
      accessor: 'title'
    },
    {
      Header: 'Replies',
      accessor: 'comment_count'
    },
    {
      Header: 'Created',
      accessor: 'created_at'
    }
  ];

  return (
    <div>
      <h4>{props.topic}</h4>
      <ReactTable data={data} columns={columns} />
    </div>
  );
};

export default ArticlesByTopicTable;

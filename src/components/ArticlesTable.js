import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from '@reach/router';

const ArticlesTable = props => {
  const data = [
    {
      author: 'weegembump',
      title: 'Seafood substitutions are increasing',
      article_id: 33,
      topic: 'cooking',
      created_at: '2018-05-30T15:59:13.341Z',
      votes: 0,
      comment_count: '6'
    }
  ];
  const columns = [
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
  ];

  return (
    <div>
      <ReactTable data={data} columns={columns} />
    </div>
  );
};

export default ArticlesTable;

import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getArrayOfArticles } from '../api';

class ArticlesTable extends Component {
  state = {
    data: [],
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
  componentDidMount() {
    getArrayOfArticles().then(articles => {
      this.setState({ data: articles });
    });
  }

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

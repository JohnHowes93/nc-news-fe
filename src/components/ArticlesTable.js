import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getArrayOfArticles } from '../api';
import { formatArticleTable } from '../utils/TableFormattingUtils';

class ArticlesTable extends Component {
  state = {
    // add page to state
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
    const formattedData = formatArticleTable(data);
    return (
      <div>
        <ReactTable data={formattedData} columns={columns} />
      </div>
    );
  }
}

export default ArticlesTable;

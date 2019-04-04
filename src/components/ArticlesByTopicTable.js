import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getArrayOfArticlesByTopic } from '../api';
import { formatArticleTable } from '../utils/TableFormattingUtils';

class ArticlesByTopicTable extends Component {
  state = {
    data: [],
    columns: [
      {
        Header: 'Votes',
        accessor: 'votes'
      },
      {
        Header: 'Title',
        accessor: 'title'
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
    getArrayOfArticlesByTopic({ topic: this.props.topic }).then(articles => {
      this.setState({ data: articles });
    });
  }

  render() {
    const { data, columns } = this.state;
    const formattedData = formatArticleTable(data);
    return (
      <div>
        <h4>{this.props.topic}</h4>
        <ReactTable data={formattedData} columns={columns} />
      </div>
    );
  }
}
export default ArticlesByTopicTable;

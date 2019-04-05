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
        Header: (
          <span role="img" aria-label="votes">
            👍
          </span>
        ),
        accessor: 'votes',
        maxWidth: 40
      },
      {
        Header: 'Title',
        accessor: 'title',
        minWidth: 300
      },
      {
        Header: 'Author',
        accessor: 'author'
      },

      {
        Header: (
          <span role="img" aria-label="comments">
            💬
          </span>
        ),
        accessor: 'comment_count',
        maxWidth: 40
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

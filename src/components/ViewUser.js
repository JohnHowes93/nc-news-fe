import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getArrayOfArticles } from '../api';
import { formatArticleTable } from '../utils/TableFormattingUtils';

class ViewUser extends Component {
  state = {
    // add page to state
    username: '',
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
        Header: 'Topic',
        accessor: 'topic'
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
    const params = { author: this.props.username };
    getArrayOfArticles(params).then(articles => {
      this.setState({ data: articles });
    });
  }

  render() {
    const { data, columns } = this.state;
    const formattedData = formatArticleTable(data);
    // date created / comment_count / votes
    return (
      <div>
        <ReactTable data={formattedData} columns={columns} />
      </div>
    );
  }
  handleSwitch = event => {
    if (this.state.sort === 1) {
      this.setState({ sort: 0 });
    } else {
      this.setState({ sort: 1 });
    }
  };
  handleToggle = event => {
    console.log(event.target.value);
  };
}

export default ViewUser;

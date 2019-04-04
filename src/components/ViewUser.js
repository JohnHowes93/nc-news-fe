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
        Header: 'Votes',
        accessor: 'votes'
      },
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Topic',
        accessor: 'topic'
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

import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getArrayOfArticles } from '../api';
import { formatArticleTable } from '../utils/TableFormattingUtils';
import Select from 'react-select/lib/Creatable';

class ViewUser extends Component {
  state = {
    // add page to state
    username: '',
    sort_by: '',
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
    ],
    sort: 1
  };
  componentDidMount() {
    const params = { author: this.props.username };
    getArrayOfArticles(params).then(articles => {
      this.setState({ data: articles });
    });
  }

  render() {
    const options = [
      { value: 'created_at', label: 'date' },
      { value: 'comment_count', label: 'replies' },
      { value: 'votes', label: 'votes' }
    ];
    const { data, columns, sort_by } = this.state;
    const formattedData = formatArticleTable(data);
    // date created / comment_count / votes
    return (
      <div>
        <div className="tableActions">
          <label className="sortSwitch">
            <input type="checkbox" onClick={this.handleSwitch} />
            Sort Ascending / Descending
            <span className="slider round" />
          </label>
          <Select
            value={sort_by}
            onChange={this.handleChange}
            options={options}
          />{' '}
        </div>
        <div>
          <ReactTable data={formattedData} columns={columns} />
        </div>
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

  handleChange = sortBy => {
    this.setState({ sortBy });
    getArrayOfArticles(sortBy.value).then(articles => {
      this.setState({ data: articles });
    });
  };
}

export default ViewUser;

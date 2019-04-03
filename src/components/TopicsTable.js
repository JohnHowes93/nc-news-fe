import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getTopics } from '../api';

class TopicsTable extends Component {
  state = {
    data: [],
    columns: [
      {
        Header: 'Title',
        accessor: 'slug'
      },
      {
        Header: 'Description',
        accessor: 'description'
      }
    ]
  };
  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ data: topics });
    });
  }
  render() {
    const { data, columns } = this.state;
    return (
      <div>
        <h4>topics</h4>
        <ReactTable data={data} columns={columns} />
      </div>
    );
  }
}

export default TopicsTable;

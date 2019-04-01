import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from '@reach/router';

const TopicsTable = props => {
  const data = [
    {
      slug: 'coding',
      description: 'Code is love, code is life'
    },
    {
      slug: 'football',
      description: 'FOOTIE!'
    },
    {
      slug: 'cooking',
      description: 'Hey good looking, what you got cooking?'
    }
  ];
  const columns = [
    {
      Header: 'Title',
      accessor: 'slug'
    },
    {
      Header: 'Description',
      accessor: 'description'
    }
  ];

  return (
    <div>
      <h4>topics</h4>
      <ReactTable data={data} columns={columns} />
    </div>
  );
};

export default TopicsTable;

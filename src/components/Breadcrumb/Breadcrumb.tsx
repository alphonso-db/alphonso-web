import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Breadcrumb.less';

export class Breadcrumb extends React.Component {
  render() {
    return (
      <ol className="breadcrumb">
        <li className="active">Dashboard</li>
      </ol>
    );
  }
};

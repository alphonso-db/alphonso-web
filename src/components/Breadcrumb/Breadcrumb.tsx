import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Breadcrumb.less';

export default class Breadcrumb extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

  render() {
    return (
      <ol className="breadcrumb">
        <li className="active">Dashboard</li>
      </ol>
    );
  }
};

import * as React from 'react';
import Dashboard from '../../views/Dashboard/Dashboard';

export default class MasterLayout extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

  render() {
    return (
      <div className="container">
        <Dashboard/>
      </div>
    );
  }
};

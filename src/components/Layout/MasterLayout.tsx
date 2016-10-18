import * as React from 'react';
import AlertBox from '../Alert/AlertBox';
import Dashboard from '../../views/Dashboard/Dashboard';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Footer from '../Footer/Footer';

export default class MasterLayout extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

  render() {
    return (
      <div className="container">
        <AlertBox type="danger">
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus</p>
        </AlertBox>
        <Breadcrumb />
        <div className="sub-container">
          <Dashboard/>
        </div>
        <Footer/>
      </div>
    );
  }
};

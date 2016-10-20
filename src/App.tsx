import * as React from 'react';

import HorizontalNav from './components/Navbar/HorizontalNav';
import MasterLayout from './components/Layout/MasterLayout';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './stylesheets/common.less';
import './stylesheets/override.less';

/**
 * React.Component<any, any> is a part of the TypeScript typing definition for React.
 * This is saying that React.Component will allow the type any to be used for the
 * components state and props objects.
 * 'any' is a special TypeScript type that basically says allow any type to be used.
 * If we wanted to restrict the props and state object to a specific type we would
 * replace any with the type we are expecting.
 */
export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <HorizontalNav />
        <MasterLayout />
      </div>
    );
  }
};

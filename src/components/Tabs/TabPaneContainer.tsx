import * as React from 'react';
import { ClusterTabPane } from '../../views/Cluster/ClusterTabPane.jsx';

export class TabPaneContainer extends React.Component {
  render() {
    return (
      <div id="super-tab-content" className="tab-content">
        <div className="tab-pane fade active in" id="cluster">
          <ClusterTabPane />
        </div>
      </div>
    );
  }
};

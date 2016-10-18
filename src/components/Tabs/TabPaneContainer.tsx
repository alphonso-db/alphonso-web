import * as React from 'react';
import ClusterTabPane from '../../views/Cluster/ClusterTabPane';

export default class TabPaneContainer extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	
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

import React from 'react';
import Tab from './Tab';
class Tabs extends React.Component {


  render() {
   return (
     <ul className="nav nav-tabs">
       {this.props.tabData.map(function(tab){
         return (
           <Tab data={tab} isActive={this.props.activeTab.name === tab.name} handleClick={this.props.changeTab.bind(this,tab)} />
         );
       }.bind(this))}
     </ul>
   );
 }

}

Tabs.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Tabs;

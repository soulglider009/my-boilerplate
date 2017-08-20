import React from 'react';
import {Meteor} from 'meteor/meteor';

import PrivateHeader from './PrivateHeader';

export default class Dashboard extends React.Component{

  componentWillMount(){
    if(!Meteor.userId()){
      this.props.history.replace('/');
    };
  }

  render(){
    return (
      <div>
           <PrivateHeader title="Default Dashboard"/>
           <div className="page-content">
             Dashboard page content
           </div>
      </div>
    );
  }
}

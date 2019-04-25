import React, { Component } from 'react';
import './App.css';

class Profile extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <span>
      <p>{this.props.nama}</p>
      <img src="blue.jpg"/>
      </span>
    ); 
}
}
export default Profile;    
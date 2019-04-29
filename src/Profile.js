import React, { Component } from 'react';
import './App.css';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

class Profile extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <span>
      <p>{this.props.nama}</p>
      <button onClick = {()=>toast.notify('Hesllo world!')
}> alert</button>
      <img src="blue.jpg"/>
      </span>
    ); 
}
}
export default Profile;    
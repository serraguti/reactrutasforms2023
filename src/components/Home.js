import React, { Component } from 'react'
import casaImage from './../assets/images/home.webp';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Component</h1>
        <img src={casaImage} style={{width: "250px", height: "250px"}}/>
      </div>
    )
  }
}

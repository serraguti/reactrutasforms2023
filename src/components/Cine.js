import React, { Component } from 'react'
import cineImage from './../assets/images/cine.jpeg';

export default class Cine extends Component {
  render() {
    return (
        <div>
            <h1>Cine Component</h1>
            <img src={cineImage} style={{width: "250px", height: "250px"}}/>
        </div>
    )
  }
}

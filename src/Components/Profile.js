import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  render() {
    return (
      <div className="profile_container">
        <img src={this.props.imgSrc} alt="photo de profile" />
        <h1>{this.props.fullName}</h1>
        <p>{this.props.bio}</p>
        <h5>{this.props.profession}</h5>
      </div>
    )
  }
}

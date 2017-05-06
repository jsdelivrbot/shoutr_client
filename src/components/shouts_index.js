import React, { Component } from "react";


export default class ShoutsIndex extends Component {

  componentWillMount() {
    console.log("All posts")
  }

  render() {
    return(
      <div>
        Here are all the shouts
      </div>
    )
  }

}
import React, { Component } from "react";
import { fetchShout } from "../actions/index";
import { connect } from "react-redux"; 
class ShoutsShow extends Component {

  componentWillMount() {
    this.props.fetchShout(this.props.params.id)
  }

  render() {
    console.log("shout is")
    console.log(this.props.shout)
    return(
      <div>
        This is a single post
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {shout: state.shout}
}


export default connect(mapStateToProps, {fetchShout})(ShoutsShow);


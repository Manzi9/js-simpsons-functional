import React, { Component } from "react";
import Name from "./Name";
import Image from "./Image";
import Quote from "./Quote";

class Character extends Component {
  state = { liked: false };

  toggle = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    console.log(this.state.liked);
    return (
      <div className={this.state.liked ? "liked" : "not-liked"}>
        <Name title={this.props.name} />
        <Image image={this.props.image} title={this.props.name} />
        <Quote title={this.props.quote} />
        <button className="btn" onClick={this.toggle}>
          Like
        </button>
      </div>
    );
  }
}

export default Character;

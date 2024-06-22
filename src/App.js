import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getSimpsons();
  }

  getSimpsons = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ simpsons: data });
  };

  render() {
    console.log(this.state.simpsons);
    if (!this.state.simpsons) {
      return <p>Loading...</p>;
    }

    return this.state.simpsons.map(function (item) {
      return (
        <Character
          name={item.character}
          image={item.image}
          quote={item.quote}
        />
      );
    });
  }
}

export default App;

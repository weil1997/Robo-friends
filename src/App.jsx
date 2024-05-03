import React, { Component } from "react";
import Card from "./Card";
import "tachyons";

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],

      searchfield: "", // Stavfel korrektat
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchange = (event) => {
    this.setState({ searchfield: event.target.value });

    console.log(filteredRobots);
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
        ()
      </div>
    );
  }
}

export default App;

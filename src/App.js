import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TrackList from "./components/tracks";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
    axios
      .get("https://itunes.apple.com/search?term=rock&media=music")
      .then(response => this.props.onSuccess(response.data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Rock Tracks</h1>
        </header>
        {this.props.loading ? (
          "loading..."
        ) : (
          <TrackList tracks={this.props.trackListing} />
        )}
      </div>
    );
  }
}

export default App;

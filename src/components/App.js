import React, { Component } from "react";
import "../index.css";
import axios from "axios";
import TrackList from "./tracksContainer";
import TrackPage from "./trackPageContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=rock&media=music"
      )
      .then(response => this.props.onSuccess(response.data))
      .catch(error => console.log(error));
  }

  render() {
    if (this.props.showingTrack) {
      return <TrackPage />;
    }
    return (
      <div className="App">
        <header>
          <h1>Rock Tracks</h1>
        </header>
        {this.props.loading ? "loading..." : <TrackList />}
      </div>
    );
  }
}

export default App;

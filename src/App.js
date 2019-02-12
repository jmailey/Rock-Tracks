import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TrackList from "./components/tracksContainer";
import TrackPage from "./components/trackPageContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
    axios
      .get("https://itunes.apple.com/search?term=rock&media=music")
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

import React, { Component } from "react";
export default class TrackPage extends Component {
  render() {
    const track = this.props.showingTrack;
    return (
      <div>
        <button onClick={() => this.props.back(false)}>Back</button>
        <div className="track__artwork">
          <img src={track.artworkUrl100} alt="" />
        </div>
        <ul>
          <li>{track.trackName}</li>
          <li>{track.artistName}</li>
          <li>£{track.collectionPrice}</li>
          <li>
            Duration: {Math.floor(track.trackTimeMillis / 60000)}:
            {((track.trackTimeMillis % 60000) / 1000).toFixed(0)}
          </li>
          <li>released : {track.releaseDate}</li>
          <li>
            <a href={track.artistViewUrl}>Visit artist page</a>
          </li>
        </ul>
        <div>
          <p>Preview</p>
          <audio src={track.previewUrl} controls />
        </div>
      </div>
    );
  }
}

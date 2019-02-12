import React, { Component } from "react";
export default class Tracks extends Component {
  renderAllTracks = () =>
    this.props.tracks.map(track => (
      <div className="track">
        <div className="track__artwork">
          <img src={track.artworkUrl100} alt="" />
        </div>
        <ul>
          <li>{track.trackName}</li>
          <li>{track.artistName}</li>
          <li>£{track.collectionPrice}</li>
          <li />
        </ul>
        <button onClick={() => this.props.showTrack(track)}>
          More details
        </button>
      </div>
    ));
  render() {
    return <div className="flex">{this.renderAllTracks()}</div>;
  }
}

import React, { Component } from "react";
export default class Track extends Component {
  render() {
    const { track, showTrack } = this.props;
    return (
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
        <button onClick={() => showTrack(track)}>More details</button>
      </div>
    );
  }
}

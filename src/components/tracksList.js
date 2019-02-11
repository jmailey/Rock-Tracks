import React from "react";
import Track from "./track";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { showingTrack: state.showingTrack };
};

const mapDispatchToProps = dispatch => ({
  showTrack: track => dispatch({ type: "SHOW_TRACK", payload: track })
});

const TrackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);

export default function Tracklist({ tracks }) {
  return (
    <div className="flex">
      {tracks.map(track => (
        <TrackContainer key={track.trackId} track={track} />
      ))}
    </div>
  );
}

// Track name
// • Artist
// • Price
// • Artwork URL
// button scren2

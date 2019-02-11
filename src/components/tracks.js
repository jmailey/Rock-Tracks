import React from "react";

export default function Tracklist({ tracks }) {
  return (
    <div className="flex">
      {tracks.map(track => (
        <div className="track">
          <div className="track__artwork">
            <img src={track.artworkUrl100} alt="" />
          </div>
          <ul>
            <li>{track.artistName}</li>
            <li>£{track.collectionPrice}</li>
            <li />
          </ul>
        </div>
      ))}
    </div>
  );
}

// Track name
// • Artist
// • Price
// • Artwork URL
// button scren2

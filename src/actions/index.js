export function fetchData() {
  return { loading: true };
}

export function addTracks(tracks) {
  return { trackListing: [...tracks.results], loading: false };
}

export function showTrack(track) {
  return { showingTrack: track };
}

export function showAllTracks() {
  return { showingTrack: false };
}

export function fetchData() {
  return { loading: true };
}

export function addTracks(tracks) {
  return { trackListing: [...tracks.results], loading: false };
}

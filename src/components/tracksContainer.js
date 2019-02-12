import Tracks from "./tracks";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { showingTrack: state.showingTrack, tracks: state.trackListing };
};

const mapDispatchToProps = dispatch => ({
  showTrack: track => dispatch({ type: "SHOW_TRACK", payload: track })
});

const AllTracks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks);

export default AllTracks;

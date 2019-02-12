import { connect } from "react-redux";
import App from "./App";
const mapStateToProps = state => {
  return {
    trackListing: state.trackListing,
    loading: state.loading,
    showingTrack: state.showingTrack
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch({ type: "BEGIN_DATA_FETCH" }),
  onSuccess: data => dispatch({ type: "SUCCESS_DATA_FETCH", payload: data }),
  back: () => dispatch({ type: "SHOW_ALL_TRACKS" })
});

const RockTracks = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default RockTracks;

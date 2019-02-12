import { connect } from "react-redux";
import TrackPageView from "./trackPage";

const mapStateToProps = state => {
  return { showingTrack: state.showingTrack };
};

const mapDispatchToProps = dispatch => ({
  back: () => dispatch({ type: "SHOW_TRACK", payload: false })
});

const TrackPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPageView);

export default TrackPage;

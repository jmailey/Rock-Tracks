import * as actions from "../actions/index";
const initialState = {
  trackListing: [],
  loading: false,
  showingTrack: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "BEGIN_DATA_FETCH":
      return { ...state, ...actions.fetchData() };
    case "SUCCESS_DATA_FETCH":
      return { ...state, ...actions.addTracks(action.payload) };
    case "SHOW_TRACK":
      return { ...state, ...actions.showTrack(action.payload) };
    case "SHOW_ALL_TRACKS":
      return { ...state, ...actions.showAllTracks() };
    default:
      return state;
  }
}
export default rootReducer;

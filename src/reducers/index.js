import * as actions from "../actions/index";
const initialState = {
  trackListing: [],
  loading: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "BEGIN_DATA_FETCH":
      return { ...state, ...actions.fetchData() };
    case "SUCCESS_DATA_FETCH":
      console.log("SUCCESS_DATA_FETCH");
      return { ...state, ...actions.addTracks(action.payload) };
    default:
      return state;
  }
}
export default rootReducer;

import * as actions from "../actions/index";
const initialState = {
  trackListing: [],
  loading: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "BEGIN_DATA_FETCH":
      return actions.fetchData(state);
    default:
      return state;
  }
}
export default rootReducer;

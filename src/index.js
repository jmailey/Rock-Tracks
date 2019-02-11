import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import { Provider } from "react-redux";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { trackListing: state.trackListing, loading: state.loading };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch({ type: "BEGIN_DATA_FETCH" }),
  onSuccess: data => dispatch({ type: "SUCCESS_DATA_FETCH", payload: data })
});

const RockTracks = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
ReactDOM.render(
  <Provider store={store}>
    <RockTracks />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

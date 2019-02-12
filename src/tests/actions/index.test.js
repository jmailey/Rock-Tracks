import * as actions from "../../actions/index";

describe("actions", () => {
  it("should create an action to fetch data", () => {
    let expected = { loading: true };
    expect(actions.fetchData()).toEqual(expected);
  });

  it("should create an action for succesfull data fetch", () => {
    let data = { results: [{ name: "test song" }] };
    let expected = { loading: false, trackListing: [{ name: "test song" }] };
    expect(actions.addTracks(data)).toEqual(expected);
  });

  it("should create an action to show a track page", () => {
    let track = { name: "testsong" };
    let expected = { showingTrack: { name: "testsong" } };
    expect(actions.showTrack(track)).toEqual(expected);
  });

  it("should create an action to show all tracks", () => {
    let expected = { showingTrack: false };
    expect(actions.showAllTracks()).toEqual(expected);
  });
});

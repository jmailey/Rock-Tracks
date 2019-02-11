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
});

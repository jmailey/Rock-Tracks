import rootReducer, { initialState } from "../../reducers/index";

describe("reducer", () => {
  const showingTrackState = {
    trackListing: [{ name: "testsong" }],
    loading: false,
    showingTrack: { name: "testsong" }
  };

  const showingAllTracksState = {
    trackListing: [{ name: "testsong" }],
    loading: false,
    showingTrack: false
  };

  it("should return initial state", () => {
    let expected = initialState;
    expect(rootReducer(undefined, {})).toEqual(expected);
  });
  it("should handle BEGIN_DATA_FETCH", () => {
    let expected = {
      trackListing: [],
      loading: true,
      showingTrack: false
    };
    expect(rootReducer(undefined, { type: "BEGIN_DATA_FETCH" })).toEqual(
      expected
    );
  });
  it("should handle SUCCESS_DATA_FETCH", () => {
    let state = {
      trackListing: [],
      loading: true,
      showingTrack: false
    };
    let expected = showingAllTracksState;
    expect(
      rootReducer(state, {
        type: "SUCCESS_DATA_FETCH",
        payload: { results: [{ name: "testsong" }] }
      })
    ).toEqual(expected);
  });

  it("should handle SHOW_TRACK", () => {
    let state = showingAllTracksState;
    let expected = showingTrackState;

    expect(
      rootReducer(state, { type: "SHOW_TRACK", payload: { name: "testsong" } })
    ).toEqual(expected);
  });

  it("should handle SHOW_ALL_TRACKS", () => {
    let state = showingTrackState;
    let expected = showingAllTracksState;

    expect(
      rootReducer(state, {
        type: "SHOW_ALL_TRACKS"
      })
    ).toEqual(expected);
  });
});

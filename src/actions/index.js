import { BEGIN_DATA_FETCH } from "./action-types";

export function fetchData(state) {
  return { ...state, loading: true };
}

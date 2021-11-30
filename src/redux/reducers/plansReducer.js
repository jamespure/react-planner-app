import { FETCH_PLANS } from "./../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PLANS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

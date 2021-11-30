import { FETCH_PLANS } from "./types";

export const fetchPlans = () => async (dispatch) => {
  const res = await fetch("http://localhost:5000/plans");
  const data = await res.json();
  await dispatch({ type: FETCH_PLANS, payload: data });
};

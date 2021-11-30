import { FETCH_PLANS } from "./types";

export const fetchPlans = () => async (dispatch) => {
  const getPlans = await fetch(
    "https://my-json-server.typicode.com/jamespure/my-json-server/db"
  );

  const res = await getPlans.json();

  const data = await res;
  await dispatch({ type: FETCH_PLANS, payload: data.plans });
};

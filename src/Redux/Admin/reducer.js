import { loadData, saveData } from "../../utils/localStorage";

import { ADD_JOB } from "./actionTypes";

const initialState = {
  job: loadData("job") || [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_JOB:
      const updatedJob = [...state.job, payload];
      saveData("job", updatedJob);
      return {
        ...state,
        job: updatedJob,
      };
    default:
      return state;
  }
};

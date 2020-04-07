import { actionTypes } from "../actions";

export const exampleInitialState = {
  count: 0,
  lastUpdate: 0,
  light: false,
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count },
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default:
      return state;
  }
}

export default reducer;

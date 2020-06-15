export const navBarReducer = (state={}, action) => {
  switch (action.type) {
    case "SHOW_DROPDOWN": return action.payload;
    case "HIDE_DROPDOWN": return action.payload;
    default: return state;
  }
}

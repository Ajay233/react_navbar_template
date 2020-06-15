export const showDropDown = () => {
  return {
    type: "SHOW_DROPDOWN",
    payload: {
      showDropDown: true
    }
  }
}

export const hideDropDown = () => {
  return {
    type: "SHOW_DROPDOWN",
    payload: {
      showDropDown: false
    }
  }
}

export const logOut = () => {
  return {
    type: "RESET_APP"
  }
}

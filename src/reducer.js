//a reducer centralizes all our methods of changing state into a single function
export const initialState = {
  loggedUser: {
    avatar: "",
    id: "",
  },
};

export default function reducer(state, action) {
  switch (action.type) {
    case "set user":
      return {
        ...state,
        loggedUser: action.loggedUser,
      };

    default:
      return state;
  }
}

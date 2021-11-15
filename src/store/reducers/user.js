const initialState = {
  userId: null,
  isLoggedIn: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
        return {...state, isLoggedIn: true};
    }

    case "LOGOUT": {
      return {
          ...state,
          isLoggedIn: false
      }
    }

    default: {
      return state;
    }
  }
};
export default UserReducer;

import { SET_MENUS } from "../type";

const initialState = {
    menus: []
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_MENUS:
      return {
          ...state,
          menus: payload
      };

    default:
      return state;
  }
};

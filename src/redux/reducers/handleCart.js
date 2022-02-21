import { ActionTypes } from "../action-types/action-types";

const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case ActionTypes.DELETE_ITEM:
      // const exist1 = state.find((x) => x.id === product.id);
      // if (exist1.qty === 1) {
      // return state.filter((x) => x.id !== exist1.id);
      // } else {
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
      );
    // }

    case ActionTypes.EMPTY_CART:
      return [];

    case ActionTypes.REMOVE_PRODUCT:
      return state.filter((x) => x.id !== product.id);

    default:
      return state;
  }
};

export default handleCart;

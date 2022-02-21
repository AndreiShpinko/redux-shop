import { ActionTypes } from "../action-types/action-types";

// For Add item to Cart
export const addItem = (product) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: product,
  };
};

// For Delete item from Cart
export const deleteItem = (product) => {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: product,
  };
};

export const emptyCart = () => {
  return {
    type: ActionTypes.EMPTY_CART,
  };
};

export const removeProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: product,
  };
};

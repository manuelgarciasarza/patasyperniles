export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

export const addToCart = (product, quantity, price) => {
  return {
    type: "ADD_CART",
    payload: {
      product,
      quantity,
      price,
    },
  };
};

export const deleteFromCart = (productId) => {
  return {
    type: "DELETE_CART",
    payload: {
      productId,
    },
  };
};

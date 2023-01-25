const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    }
  }

  if (action.type === 'INCREASE_AMOUNT') {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item,
      ),
    }
  }

  if (action.type === 'DECREASE_AMOUNT') {
    return {
      ...state,
      cart: state.cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item,
        )
        .filter((item) => item.amount > 0),
    }
  }

  //getting the amount of items in the cart and the total price using reduce() method
  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.amount += cartItem.amount
        cartTotal.total += cartItem.price * cartItem.amount
        return cartTotal
      },
      { total: 0, amount: 0 },
    )
    total = parseFloat(total.toFixed(2))
    // return {
    //   ...state,
    //   total: state.cart
    //     .reduce(
    //       (cartTotal, cartItem) => cartTotal + cartItem.price * cartItem.amount,
    //       0,
    //     )
    //     .toFixed(2),
    //   amount: state.cart.reduce(
    //     (cartAmount, cartItem) => cartAmount + cartItem.amount,
    //     0,
    //   ),
    // }
    return {
      ...state,
      total,
      amount,
    }
  }
  if (action.type === 'LOADING') {
    console.log('loading')
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return {
      ...state,
      cart: action.payload,
    }
  }
  throw new Error('no matching action type')
}

export default reducer

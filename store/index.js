export const state = () => ({
  message: '',
  cart: {
    cartItems: [],
    subTotal: 0,
    isCartOpen: false,
  },
})

export const mutations = {
  openCart(state, payload) {
    state.cart.isCartOpen = payload
  },
  getMessage(state, payload) {
    state.message = payload
  },
  addSkuItemToCart(state, payload) {
    state.cart.subTotal += payload.qty * payload.price
    const doesItemExistInList = state.cart.cartItems.some(
      (item) => item.sku === payload.sku
    )
    if (!doesItemExistInList) {
      state.cart.cartItems.push(payload)
    } else {
      console.log(payload.sku)
      console.log(state.cart.cartItems.map(item => item.sku))
      const prevCartItems = JSON.parse(JSON.stringify(state.cart.cartItems))
      state.cart.cartItems = prevCartItems.reduce((acc, item) => {
        if (item.sku === payload.sku) {
          item.qty += payload.qty
          console.log(item.qty)
        }
        acc.push(item)
        return acc
      }, [])
    }
  },
}

export const actions = {
  // asynchronous call
  async getMessageAsync(state) {
    const headers = { Accept: 'application/json' }
    const results = await fetch('/api/ping', { headers })
    const data = await results.json()
    state.commit('getMessage', data.message)
  },
}

export const modules = {}

export const getters = {
  getMessage: (state) => state.message,
  getCart: (state) => state.cart,
  isCartOpen: (state) => state.cart.isCartOpen,
}

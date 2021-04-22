export const state = () => ({
  message: '',
  cart: {
    cartItems: [],
    subTotal: 0,
    totalQty: 0,
    isCartOpen: false,
  },
})
const addOptionsToItem = (item) => {
  const range = 4
  const topRange = item.qty + range
  item.options = [...Array(topRange + 1).keys()].filter(
    (qty) => qty >= 1
  )
  return item
}

export const mutations = {
  openCart(state, payload) {
    state.cart.isCartOpen = payload
  },
  getMessage(state, payload) {
    state.message = payload
  },
  removeSkuFromCart(state, selectedSku) {
    const prevCartItems = JSON.parse(JSON.stringify(state.cart.cartItems))
    const removingSkuObj = prevCartItems.find(item => item.sku === selectedSku)
    const removingSkuPriceAmt = removingSkuObj.qty * removingSkuObj.price
    const updatedCartItems = prevCartItems.filter(item => item.sku !== selectedSku)
    state.cart.subTotal -= removingSkuPriceAmt
    state.cart.totalQty -= removingSkuObj.qty
    state.cart.cartItems = updatedCartItems
  },
  updateCartSkuQty(state, payload) {
    const [selectedSku, selectedQty, itemPrice] = payload.split('-')
    const prevCartItems = JSON.parse(JSON.stringify(state.cart.cartItems))

    state.cart.cartItems = prevCartItems.map((item) => {
      if (item.sku === selectedSku) {
        state.cart.subTotal -= item.price * item.qty
        state.cart.subTotal += item.price * +selectedQty
        state.cart.totalQty -= item.qty
        state.cart.totalQty += +selectedQty
        item.qty = +selectedQty
      }
      return item
    })
  },
  addSkuItemToCart(state, payload) {
    state.cart.subTotal += payload.qty * payload.price
    state.cart.totalQty += payload.qty
    const doesItemExistInList = state.cart.cartItems.some(
      (item) => item.sku === payload.sku
    )
    let prevCartItems = JSON.parse(JSON.stringify(state.cart.cartItems))
    prevCartItems = prevCartItems.map((item) => addOptionsToItem(item))

    if (!doesItemExistInList) {
      const payloadWithOptions = addOptionsToItem(payload)
      state.cart.cartItems.push(payloadWithOptions)
    } else {
      state.cart.cartItems = prevCartItems.reduce((acc, item) => {
        if (item.sku === payload.sku) {
          item.qty += payload.qty
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
  getCartQty: (state) => state.cart.totalQty,
  isCartOpen: (state) => state.cart.isCartOpen,
}

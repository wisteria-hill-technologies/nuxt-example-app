<template>
  <div class="cart bg-themeDark">
    <div v-if="cart.cartItems.length > 0">
      <div class="CartProducts sm:pt-8 sm:px-8 px-2">
        <div class="table px-3.5 py-7.5">
          <div class="CartProductsHeader tableRow text-cartGray font-semibold flex align-baseline">
            <div class="tableCol border-b-1 border-opacity-20 border-gray-100 pb-4">
              Cart
            </div>
            <div  class="tableCol border-b-1 border-opacity-20 border-gray-100 pb-4">Size</div>
            <div  class="tableCol border-b-1 border-opacity-20 border-gray-100 pb-4">Quantity</div>
            <div  class="tableCol border-b-1 border-opacity-20 border-gray-100 pb-4" align="end">
              <button v-on:click="closeCart">
                <CrossIcon />
              </button>
            </div>
          </div>
          <div class="tableRow" v-for="item in cart.cartItems">
            <div class="tableCol border-b-1 border-opacity-20 border-gray-100 py-6">
              <a
                class="CartProduct-name"
                href="https://www.aesop.com/uk/p/skin/cleanse/in-two-minds-facial-cleanser/"
              >{{item.title}}</a
              >
            </div>
            <div  class="tableCol border-b-1 border-opacity-20 border-gray-100 py-6">
              {{item.size}}
            </div>
            <div  class="tableCol border-b-1 border-opacity-20 border-gray-100 py-6 text-white active:text-black">
              <select @change="handleSelectQty" class="bg-transparent active:bg-theme text-white active:text-black w-16 py-1 p-3">
                <option class="text-darkTheme" :selected="item.qty===option" v-for="option in item.options" :value="`${item.sku}-${option}-${item.price}`">{{option}}</option>
              </select>
              <button
                class="text-sm mx-3 px-3 text-themeDark hover:text-white transition-colors duration-300"
                v-on:click="removeSkuFromCart(item.sku)"
              >
                Remove
              </button>
            </div>
            <div  class="tableCol border-b-1 border-opacity-20 border-gray-100 py-6" align="end">
              £{{item.qty * item.price}}
            </div>
          </div>
        </div>
      </div>
      <div class="CartSummary">
        <div class="CartSummaryWrapper flex flex-wrap justify-between sm:px-10 pl-2 px-5 pb-7.5">
          <div class="CartSummaryLeft w-full md:w-1/3 flex items-end m-2">
            <div class="md:mb-14 text-xs md:text-sm text-cartGray">
              <div class="mb-3.5">
                Complimentary express delivery on all orders above £90.
              </div>
              <div>
                Shipping to the United Kingdom.
              </div>
            </div>
          </div>
          <div class="CartSummaryRight w-full lg:w-1/3 md:w-1/2 m-2">
            <div class="CartSummary-promo text-xs md:text-sm pb-6 border-b-1 border-opacity-20 border-gray-100">
              <button
                aria-label="Apply a promotional code"
                type="button"
                class="w-full"
              >
                <div class="w-full flex text-cartGray font-semibold justify-between">
                  <div><h5>Apply a promotional code</h5></div>
                  <div><CartPlusIcon /></div>
                </div>
              </button>
            </div>
            <div
              class="OfferMessage text-xs md:text-sm mb-4 md:mb-0 pt-7"
            >
              <span class="text-cartGray">Enjoy complimentary shipping on all orders.</span>
            </div>
            <div class="Subtotal flex justify-between align-items-center py-6">
              <h5 class="text-cartGray font-semibold">Subtotal (Tax Incl.)</h5>
              <div class="text-white text-2xl">
                <span>£{{cart.subTotal}}</span>
              </div>
            </div>
            <div>
              <button
                class="w-full"
                type="button"
              >
                <div class="bg-theme px-6 py-5 mb-5">
                  <span class="text-sm font-semibold text-themeDark">Checkout</span>
                </div>
              </button>
              <div class="ProviderDisclaimer-wrapper">
                <ul
                  class="CompanyLogosList flex text-sm text-cartGray"
                >
                  <li class="pl-2 pr-4.5">VISA</li>
                  <li class="pr-4.5"">Master Card</li>
                  <li class="pr-4.5">PayPal</li>
                  <li class="pr-4.5">Klarna</li>
                  <li class="pr-4.5">Alipay</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-end items-center p-5">
      <p class="px-3">You have no items in your cart</p>
      <button v-on:click="closeCart">
        <CrossIcon />
      </button></div>
  </div>
</template>

<script>
import CrossIcon from '../../../components/common/Icons/CrossIcon'
import CartPlusIcon from '../../../components/common/Icons/CartPlusIcon'

export default {
  components: {
    CrossIcon,
    CartPlusIcon,
  },
  methods: {
    closeCart() {
      this.$emit('closeCart');
    },
    handleSelectQty(e) {
      const value = e.target.value //sku-qty-price
      this.$store.commit('updateCartSkuQty', value)
    },
    removeSkuFromCart(sku) {
      this.$store.commit('removeSkuFromCart', sku)
    }
  },
  data() {
    return {
      cart: {
        cartItems: [],
        subTotal: 0,
      }
    }
  },
  mounted() {
    this.cart = this.$store.getters.getCart
  },
  updated() {
    this.cart = this.$store.getters.getCart
  },
}
</script>

<style>
.cart {
  position: fixed;
  border-bottom: 1px solid #252525;
  color: #fffef2;
  left: 0;
  max-height: 100vh;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  padding-right: 40px;
  transform: none;
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  width: calc(100vw + 40px);
  z-index: 1300;
}

.table {
  display: table;
  width: 100%;
}
.tableRow {
  display: flex;
  width: 100%;
  clear: both;
}
.tableCol {
  float: left;
  display: table-column;
  width: 25%;
  box-sizing: border-box;
}

</style>

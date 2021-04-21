<template>
  <div class="cart bg-themeDark">
    <button v-on:click="closeCart">
      <CrossIcon />
    </button>
    <div class="CartProducts">
      <div class="CartProductsHeader flex">
        <h1>{{JSON.stringify(cart, null, 4)}}</h1>
        <div class="titleLabel">Cart</div>
        <div class="sizeLabel">Size</div>
        <div class="quantityLabel">Quantity</div>
        <button aria-label="Close" class="closeBtn">x</button>
      </div>
      <ul class="CartProductsList">
        <li class="CartProductsList-item">
          <div
            class="CartProduct flex"
          >
            <div class="CartProduct-nameWrapper">
              <a
                data-test-ref="CARTPRODUCT_NAME"
                class="CartProduct-name"
                href="https://www.aesop.com/uk/p/skin/cleanse/in-two-minds-facial-cleanser/"
                >In Two Minds Facial Cleanser</a
              >
              <div class="CartProduct-size">
                <span>100 mL </span>
              </div>
            </div>
            <div class="CartProduct-quantity">
              <button class="CartProductQuantity CartProductQuantity--closed">
                <span class="CartProductQuantity-amount">2</span
                ><svg
                  aria-labelledby="4b2fee8a-7162-4f36-981d-298630a42110"
                  class="Icon CartProductQuantity-icon"
                  role="img"
                  viewBox="0 0 50 50"
                >
                  <title id="4b2fee8a-7162-4f36-981d-298630a42110">
                    Change quantity
                  </title>
                  <g>
                    <polygon
                      points="25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 "
                    ></polygon>
                  </g>
                </svg>
              </button>
            </div>
            <div class="CartProduct-remove">
              <button class="CartProduct-removeBtn">Remove</button>
            </div>
            <div class="CartProduct-total">
              <span>£46.00</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="CartSummary">
      <div class="CartSummary-wrapper">
        <div class="CartSummary-notice m-2 border-1">
          <div class="CartSummary-noticeItem">
            Complimentary express delivery on all orders above £90.
          </div>
          <div class="CartSummary-noticeItem">
            Shipping to the United Kingdom.
          </div>
        </div>
        <div class="m-2 border-1">
          <div class="CartSummary-promo">
            <button
              aria-label="Apply a promotional code"
              class="CartSummary-promoBtn"
              type="button"
            >
              <div class="flex">
                <h5>Apply a promotional code</h5>
                <div>+</div>
              </div>
            </button>
          </div>
          <div
            class="OfferMessage"
          >
            <span>Enjoy complimentary shipping on all orders.</span>
          </div>
          <div class="CartSummary-item CartSummary-item--noBorder">
            <h5 class="CartSummary-itemLabel">Subtotal (Tax Incl.)</h5>
            <div class="CartSummary-itemAmount CartSummary-subtotalAmount">
              <span>£46.00</span>
            </div>
          </div>
          <div class="CartSummary-checkoutBtnWrapper">
            <button
              class="Btn Btn--large CartSummary-checkoutBtn"
              type="button"
            >
              <div class="Btn-content">
                <span class="Btn-label">Checkout</span>
              </div>
            </button>
            <div class="ProviderDisclaimer-wrapper">
              <ul
                class="CompanyLogos-list CartSummary-noticeItem"
                data-test-ref="CART_PAYMENT_ICONS"
              >
                <li class="CompanyLogos-listItem">logo</li>
                <li class="CompanyLogos-listItem">logo</li>
                <li class="CompanyLogos-listItem">logo</li>
                <li class="CompanyLogos-listItem">logo</li>
                <li class="CompanyLogos-listItem">logo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CrossIcon from '../../../components/common/Icons/CrossIcon'
export default {
  components: {
    CrossIcon,
  },
  methods: {
    closeCart() {
      this.$emit('closeCart');
    },
  },
  data() {
    return {
      cart: {
        cartItems: [],
        subTotal: 0,
      },
    }
  },
  computed: {
    message() {
      return this.$store.getters.getMessage
    },
  },
  mounted() {
    // this.$store.dispatch('getMessageAsync')
    // this.$store.commit('getMessage', 'YO!')
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
.CartProducts {
  padding: 34px 34px 0;
}
.CartProductsHeader {
  padding: 0 0 15px;
}
</style>

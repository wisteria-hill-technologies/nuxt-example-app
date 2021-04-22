<template>
  <div>
    <div class="w-full z-10 bg-theme">
      <transition name="slide">
        <Cart v-if="isCartOpen" @closeCart="closeCart" />
      </transition>
      <nav class="relative">
        <div class="header text-sm font-semibold relative flex justify-between">
          <ul class="flex items-center px-4">
            <li v-for="linkStr in navlinks" class="px-4">{{ linkStr }}</li>
          </ul>
          <ul class="flex items-center px-6">
            <li class="px-4">Login</li>
            <li class="px-4" role="button" @click="openCart">
              Cart {{ totalQty > 0 ? totalQty : '' }}
            </li>
          </ul>
        </div>
        <a class="NavLogo text-3xl absolute lg:top-48 top-32" href="/"
          ><Logo
        /></a>
      </nav>
    </div>
  </div>
</template>

<script>
import Cart from './Cart'

export default {
  name: 'AppHeader',
  components: {
    Cart,
  },
  data() {
    return {
      isCartOpen: false,
    }
  },
  computed: {
    totalQty() {
      return this.$store.getters.getCartQty
    },
    navLinks() {
      return this.$store.getters.getNavlinks
    },
  },
  created() {
    this.navlinks = this.$store.getters.getNavlinks
  },
  mounted() {
    this.isCartOpen = this.$store.getters.isCartOpen
    this.cartQty = this.$store.getters.getCartQty
    this.navlinks = this.$store.getters.getNavlinks
  },
  updated() {
    this.isCartOpen = this.$store.getters.isCartOpen
    this.cartQty = this.$store.getters.getCartQty
    this.navlinks = this.$store.getters.getNavlinks
  },
  methods: {
    openCart() {
      this.isCartOpen = !this.isCartOpen
      this.$store.commit('openCart', this.isCartOpen)
    },
    closeCart() {
      this.isCartOpen = false
      this.$store.commit('openCart', false)
    },
  },
}
</script>

<style>
.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  visibility: hidden;
}
.slider-enter-active,
.slider-leave-active {
  transition: all 1s ease;
}
.slide-enter-to,
.slide-leave {
  transform: none;
  visibility: visible;
}

.header {
  height: 80px;
}
.NavLogo {
  height: 38px;
  left: 40px;
  width: 100px;
}
</style>

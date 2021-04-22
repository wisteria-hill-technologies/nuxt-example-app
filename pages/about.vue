<template>
  <div>
    <div><h1 class="text-2xl">About</h1></div>
    <p class="paragraph">This is about page.</p>
    <p class="paragraph">This is about page.</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is about page.',
        },
      ],
    }
  },
  data() {
    return {
      overlayVisible: false,
      productDetails: null,
    }
  },
  //  // Example of data fetching after page load.
  // computed: {
  //   productDetails() {
  //     return this.$store.getters.getProductDetails
  //   },
  // },
  created() {
    // this.$store.dispatch('getProductDetailsAsync', 'abc100ml') // this is how to get data after page load if prefered.
    this.productDetails = this.$store.getters.getProductDetails
  },
  async asyncData({ store }) {
    // SSR
    const payload = 'abc100ml'
    const headers = { Accept: 'application/json' }
    const results = await fetch(`https://nuxt-noby-app-001.herokuapp.com/api/productDetails?=${payload}`, { headers })
    const data = await results.json()
    store.state.productDetails = data

    const navResults = await fetch(
      'https://nuxt-noby-app-001.herokuapp.com/api/navlinks',
      { headers }
    )
    const navLinkData = await navResults.json()
    store.state.navlinks = navLinkData.navlinks
  },
  updated() {
    this.productDetails = this.$store.getters.getProductDetails
  },
}
</script>

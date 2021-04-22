<template>
  <form
    class="ProductHeader flex flex-wrap justify-center"
    @submit.prevent="handleSubmit"
  >
    <ProductImage
      :selected-sku="selectedSku"
      :products="productDetails.products"
      @selectedSkuChanged="handleSelectedSkuChange"
    />
    <ProductInfo
      :adding-to-cart="addingToCart"
      :title="title"
      :description="productDetails.description"
      :selected-sku="selectedSku"
      :products="productDetails.products"
      :details-list="productDetails.detailsList"
      @openSidePanel="openSidePanel"
    />
  </form>
</template>

<script>
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

export default {
  components: { ProductImage, ProductInfo },
  props: {
    productDetails: Object,
  },
  data() {
    return {
      addingToCart: false,
      selectedSku:
        (this.productDetails && this.productDetails.products[0]) || null,
    }
  },
  methods: {
    openSidePanel() {
      this.$emit('openSidePanel')
    },
    handleSelectedSkuChange(selectedSku) {
      this.selectedSku = selectedSku
    },
    handleSubmit() {
      this.addingToCart = true
      setTimeout(() => {
        this.selectedSku.qty = 1
        this.$store.commit('addSkuItemToCart', this.selectedSku)
        this.addingToCart = false
      }, 700)
    },
  },
}
</script>

<style scoped>
.ProductHeader {
  min-height: 90vh;
  padding: 115px 40px 100px;
  position: relative;
}
</style>

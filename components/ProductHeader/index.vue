<template>
  <Form class="ProductHeader flex flex-wrap">
    <ProductImage />
    <ProductInfo @openSidePanel="openSidePanel" />
  </Form>
</template>

<script>
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

export default {
  components: { ProductImage, ProductInfo },
  methods: {
    openSidePanel() {
      this.$emit('openSidePanel')
    },
  },
}
</script>

<style scoped>
.ProductHeader {
  min-height: 100vh;
  padding: 115px 40px 100px;
  position: relative;
}
</style>

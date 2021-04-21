<template>
  <div class="productInfoWrapper flex flex-col justify-end px-20">
    <div class="productCommonSummary pb-4">
      <nav class="Breadcrumbs mb-6 ml-0.5">
        <ul class="flex text-sm">
          <li class="mr-6">
            <a href="https://www.aesop.com/uk/c/skin/">Skin</a>
          </li>
          <li class="list-disc mr-6">
            <a href="https://www.aesop.com/uk/c/skin/cleanse/">Cleanse</a>
          </li>
        </ul>
      </nav>
      <h1 class="text-3xl text-black mb-3.7">{{ title }}</h1>
      <p class="productDescription text-sm">
        {{ description }}
      </p>
    </div>

    <ProductDetails
      :details-list="detailsList"
      @openSidePanel="openSidePanel"
    />
    <div>
      <button class="border px-5 py-4 bg-dark text-white w-full" type="submit">
        <div>
          <span class="Btn-label text-sm"> Add to your cart — £{{selectedSku.price}}</span>
          <span class="Btn-label text-sm">Added to your cart</span>
          <span class="LoadingIndicator LoadingIndicator--light">
            <span class="LoadingIndicator-dot"></span>
            <span class="LoadingIndicator-dot"></span>
            <span class="LoadingIndicator-dot"></span>
          </span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import ProductDetails from '../../../common/ProductDetails'

export default {
  components: {
    ProductDetails,
  },
  props: {
    title: String,
    description: String,
    selectedSku: Object,
    products: Array,
    detailsList: Array,
  },
  methods: {
    openSidePanel() {
      this.$emit('openSidePanel')
    },
  },
}
</script>

<style scoped>
.productInfoWrapper {
  max-width: 550px;
}
</style>

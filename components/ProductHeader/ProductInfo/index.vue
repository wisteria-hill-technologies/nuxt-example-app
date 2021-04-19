<template>
  <div class="productInfoWrapper px-20">
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
      <h1 class="text-3xl text-black mb-3.7">In Two Minds Facial Cleanser</h1>
      <p class="productDescription text-sm">
        A gentle gel-based formulation that cleanses thoroughly without drying
        the skin or stripping its natural oils.
      </p>
    </div>

    <ProductDetails
      :details-list="detailsList"
      @openSidePanel="openSidePanel"
    />
    <div>
      <button class="border px-5 py-4 bg-dark text-white w-full" type="submit">
        <div>
          <span class="Btn-label text-sm"> Add to your cart — £23.00</span>
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
import ProductDetails from '../../common/ProductDetails'

export default {
  components: {
    ProductDetails,
  },
  data() {
    return {
      detailsList: [
        { title: 'Suited To', description: 'Combination skin', button: false },
        {
          title: 'Skin feel',
          description: 'Purified, soft, refreshed',
          button: false,
        },
        {
          title: 'Key ingredients',
          description: 'Witch Hazel, Salicylic Acid, Sage Leaf',
          button: true,
        },
      ],
    }
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

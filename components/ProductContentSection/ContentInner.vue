<template>
  <div class="ContentInnerWrapper py-28 m-auto w-2/3">
    <header class="flex relative flex-col-reverse">
      <h2 class="text-3xl font-cursive mb-5">
        Dispense into clean hands, massage over the face and neck, then rinse
        thoroughly with warm water.
      </h2>
      <h3 class="font-semibold text-sm mb-1">How to use</h3>
    </header>
    <ProductDetails :details-list="detailsList" />
  </div>
</template>

<script>
import ProductDetails from '../common/ProductDetails'

export default {
  components: {
    ProductDetails,
  },
  data() {
    return {
      detailsList: [
        { title: 'Dosage', description: 'Half a teaspoon', button: false },
        {
          title: 'Texture',
          description: 'Lightweight gel',
          button: false,
        },
        {
          title: 'Aroma',
          description: 'Fresh, herbaceous',
          button: false,
        },
      ],
    }
  },
}
</script>

<style scoped>
.ContentInnerWrapper {
  max-width: 780px;
}
</style>

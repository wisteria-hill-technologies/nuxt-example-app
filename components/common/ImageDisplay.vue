<template>
  <div :key="selectedSku.picture.srcsets[0]" class="sm:pt-3 pt-20">
    <picture class="productPicture">
      <source
        :srcset="selectedSku.picture.srcsets[0]"
        media="(min-width: 0px)"
      />
      <img
        class="w-max productImage" :alt="selectedSku.img.alt"
      />
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    selectedSku: Object,
  },
}
</script>

<style>
.productImage {
  width: 500px;
}
</style>


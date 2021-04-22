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
        <transition name="fade">
          <span v-if="!addingToCart" class="Btn-label text-sm">
            Add to your cart — £{{ selectedSku.price }}
          </span>
          <span v-else class="Btn-label text-sm">
            Added to your cart
          </span>
        </transition>
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
    addingToCart: Boolean,
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.productInfoWrapper {
  max-width: 550px;
}
</style>

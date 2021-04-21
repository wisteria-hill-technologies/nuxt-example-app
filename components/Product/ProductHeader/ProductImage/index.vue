<template>
  <div class="productImageWrapper flex justify-center xl:justify-end sm:flex-grow mb-4 md:mb-0">
    <div class="productImageFrame flex flex-col justify-end">
      <transition name="fade">
        <ImageDisplay :selectedSku="selectedSku" />
      </transition>
      <ul
        aria-label="Product sizes"
        class="flex items-center justify-center"
        role="group"
      >
        <li v-for="product in products" class="px-2">
          <label>
            <input
              :id="product.sku"
              v-model="sku"
              type="radio"
              :value="product.sku"
            />
            <label :for="product.sku">{{ product.size }}</label>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ImageDisplay from '../../../common/ImageDisplay'
export default {
  components: {
    ImageDisplay,
  },
  props: {
    products: Array,
  },
  data() {
    return {
      selectedSku: null,
      sku: this.products[0].sku,
    }
  },
  created() {
    this.selectedSku = this.products.find((product) => product.sku === this.sku)
  },
  updated() {
    this.selectedSku = this.products.find((product) => product.sku === this.sku)
    this.$emit('selectedSkuChanged', this.selectedSku)
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

.productImageFrame {
  animation: 1s ease-out 0s 1 slideInFromRight;
  transition: opacity 1.7s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s,
    transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s;
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

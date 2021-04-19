<template>
  <div class="productDetails border-dark border-t-2">
    <ul class="productDetails-list">
      <li
        v-for="(detail, index) in detailsList"
        :key="detail.title"
        class="py-4"
        :class="index !== detailsList.length - 1 ? 'border-b-1' : ''"
      >
        <div
          class="productDetails-itemTitle text-sm font-semibold flex justify-between"
        >
          <p>{{ detail.title }}</p>
          <button
            v-if="detail.button"
            aria-label="View more ingredients"
            class="productDetails-moreBtn"
            type="button"
            @click="openSidePanel"
          >
            <PlusIcon fill="none" stroke="black" />
          </button>
        </div>
        <div
          class="productDetails-itemDescription text-sm text-faded"
          :class="detailsList.length"
        >
          <p>{{ detail.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    detailsList: {
      type: Array,
    },
  },
  methods: {
    openSidePanel() {
      this.$emit('openSidePanel')
    },
  },
}
</script>

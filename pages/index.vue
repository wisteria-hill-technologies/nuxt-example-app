<template>
  <div>
    <transition name="fade">
      <div v-if="overlayVisible" class="overlay" />
    </transition>
    <div
      class="sidePanel lg:px-32 px-20 bg-theme h-full lg:w-1/2 py-40 flex flex-col justify-center fixed top-0"
      :class="{
        sidePanelClosed: !overlayVisible,
        sidePanelOpen: overlayVisible,
      }"
    >
      <h3 class="text-sm font-semibold mb-4">Ingredients</h3>
      <p class="text-sm mb-5">
        Water (Aqua), Sodium Laurylglucosides Hydroxypropylsulfonate,
        Cocamidopropyl Hydroxysultaine, PEG-40 Hydrogenated Castor Oil,
        Sorbitol, Hamamelis Virginiana (Witch Hazel) Water, Sodium Methyl Cocoyl
        Taurate, Sodium Chloride, Phenoxyethanol, PEG-120 Methyl Glucose
        Dioleate, Polysorbate 80, Lavandula Angustifolia (Lavender) Oil, Sodium
        Dehydroacetate, Sodium Gluconate, Ormenis Multicaulis Oil, Rosmarinus
        Officinalis (Rosemary) Leaf Oil, Citric Acid, Salicylic Acid, Coconut
        Acid, Salvia Officinalis (Sage) Oil, Benzoic Acid, Tocopherol, Linalool,
        Limonene.
      </p>
      <p>
        This ingredient list is subject to change. Please refer to the product
        label for the most accurate ingredient list for each individual product
        purchased prior to use.
      </p>
      <button
        class="sidePanelCloseButton"
        type="button"
        @click="overlayVisible = !overlayVisible"
      >
        <div class="w-3">
          <svg class="CrossIcon" role="img" viewBox="0 0 50 50">
            <title>Close</title>
            <g>
              <polygon
                points="50,5 45,0 25,20 5,0 0,5 20,25 0,45 5,50 25,30 45,50 50,45 30,25"
              ></polygon>
            </g>
          </svg>
        </div>
      </button>
    </div>
    <ProductHeader @openSidePanel="overlayVisible = !overlayVisible" />
    <SecondaryMessageSection />
    <ProductContentSection />
    <ProductCarouselSection />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return { overlayVisible: true }
  },
}
</script>

<style scoped>
.sidePanel {
  z-index: 1900;
}
.sidePanelClosed {
  transform: translateX(-100%);
  transition: transform 0.8s ease;
}

.sidePanelOpen {
  transform: translateX(0);
  transition: transform 0.8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.overlay {
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1300;
  background-color: rgba(0, 0, 0, 0.5);
}
.sidePanelCloseButton {
  align-items: center;
  display: flex;
  height: 30px;
  justify-content: center;
  position: absolute;
  right: 15px;
  top: 15px;
  width: 30px;
}
</style>

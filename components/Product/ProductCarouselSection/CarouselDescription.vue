<template>
  <div class="outline-none flex-grow" style="flex-basis: 0" aria-hidden="false">
    <div class="mx-16">
      <div class="CarouselIntroduction">
        <header>
          <h2 class="text-3xl font-cursive mb-2.5">
            {{ title }}
          </h2>
        </header>
        <p class="text-sm">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
}
</script>

<template>
  <div>
    <div><h1 class="text-2xl">About</h1></div>
    <p class="paragraph">This is about page.</p>
    <p class="paragraph">This is about page.</p>
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is about page.',
        },
      ],
    }
  },
}
</script>

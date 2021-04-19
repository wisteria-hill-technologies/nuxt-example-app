<template>
  <div class="Omorfi bg-theme">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style>
body,
html {
  height: 100%;
}

html {
  box-sizing: border-box;
  color: #333;
  display: block;
}

body {
  background-color: #252525;
  margin: 0;
  overflow-x: hidden;
  position: relative;
  transition: margin-top 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  font-family: 'Suisse Intl', sans-serif;
}

#__nuxt,
#__layout {
  height: 100%;
}

.Omorfi {
  min-height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

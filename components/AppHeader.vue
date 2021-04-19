<template>
  <nav>
    <div class="header text-sm font-semibold relative flex justify-between">
      <ul class="flex items-center px-4">
        <li class="px-4">Shop</li>
        <li class="px-4">Read</li>
        <li class="px-4">Stories</li>
        <li class="px-4">Search</li>
      </ul>
      <ul class="flex items-center px-6">
        <li class="px-4">Login</li>
        <li class="px-4">Cart</li>
      </ul>
    </div>
    <a class="NavLogo text-3xl absolute lg:top-48 top-32" href="/"><Logo /></a>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
}
</script>

<style>
.header {
  height: 80px;
}
.NavLogo {
  height: 38px;
  left: 40px;
  width: 100px;
}
</style>

<template>
  <div class="wrapper">
    <slot />
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss">
html, body {
  height: 100%
}

body {
  background: #f8f8f8;
  font-family: "SF Pro Display", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c1c1c;
  margin: 0;
}

.wrapper {
  padding: 0 10px;
  overflow-x: hidden;
}
</style>

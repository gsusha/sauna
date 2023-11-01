<template>
  <div class="button">
    <slot />
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.button {
  background: #5FAD56;
  border-radius: 10px;
  color: #FFFFFF;
  font-weight: 500;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: .3s ease;
  &:hover {
    opacity: 0.7;
  }
}
</style>
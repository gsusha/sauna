<template>
  <div class="base-header">
    <div v-if="showBackButton" class="header-icon" @click="goBack">
      <div class="symbol">&lt;</div>
    </div>
    <div v-else class="header-icon no-icon" />
    <slot />
    <div class="header-icon" @click="closeTab">
      <div class="symbol">×</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const goBack = () => {
  return false;
  //TODO: на шаг назад
};

const closeTab = () => {
  window.close();
  //TODO: непонятно вообще что она должна делать
};

//TODO: задать условие
const showBackButton = computed(() => {
  return false;
});
</script>
<style lang="scss">
.base-header {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-icon {
    background: #d9d9d9;
    border-radius: 50%;
    min-width: 30px;
    min-height: 30px;
    cursor: pointer;
    position: relative;
    .symbol {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
    }
    &.no-icon {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>

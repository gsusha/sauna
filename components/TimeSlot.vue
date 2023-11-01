<template>
  <div class="time-slot">
    <div class="time">{{ props.time }}</div>
    <div class="price">{{ props.price }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  time: string;
  price: string;
}>();
</script>
<style scoped lang="scss">
.time-slot {
  border-radius: 10px;
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  .price {
    font-size: 14px;
    color: #ec2424;
  }
}
</style>

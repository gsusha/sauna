<template>
  <BaseCard>
    <div class="name">{{ name }}</div>
    <input :value="value" :placeholder="placeholder" />
  </BaseCard>
</template>
<script lang="ts" setup>
const props = defineProps<{
  name: string;
  value: any;
  placeholder?: string;
}>();
</script>
<style lang="scss" scoped>
.name {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}

input {
  border: none;
  font-size: 18px;
  width: 100%;
  &:focus {
    outline: none;
  }
}
</style>
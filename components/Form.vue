<template>
  <div class="form">
    <RoomsList v-show="activeStep === 1" @change-step="changeStep" />
    <DateTimePicker v-show="activeStep === 2" @change-step="changeStep" />
    <Checking v-show="activeStep === 3" @change-step="changeStep" />
    <Done v-show="activeStep === 4" />
  </div>
</template>
<script lang="ts" setup>
import { hardcodeRooms } from '~/utils/temp';
import type { RoomData } from '~/types/room';

//TODO: берём из апи
const rooms = hardcodeRooms as RoomData[];

const activeStep = ref(rooms.length ? 1 : 2);
const changeStep = (step: number) => {
  activeStep.value = step
}
</script>
<style lang="scss" scoped></style>
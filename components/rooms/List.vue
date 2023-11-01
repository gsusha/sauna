<template>
  <div>
    <BaseHeader>
      <div>
        <div>{{ sauna.name }}</div>
        <div>{{ sauna.address }}</div>
      </div>
    </BaseHeader>
    <ul class="rooms">
      <li
          class="room"
          v-for="room in rooms"
          :key="room.id"
          @click="selectRoom(room)"
      >
        <RoomsCard :room="room" :show-info="true" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { hardcodeSauna, hardcodeRooms } from '~/utils/temp';
import type { RoomData } from '~/types/room';
import type { SaunaData } from '~/types/sauna';

//TODO: брать из апи
const sauna = hardcodeSauna as SaunaData;
const rooms = hardcodeRooms as RoomData[];

const emit = defineEmits(['change-step'])

const selectRoom = (room: RoomData) => {
  //TODO: передать данные куда надо
  emit('change-step', 2);
}

</script>
<style scoped lang="scss">
.rooms {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 0;

  .room {
    display: block;
    cursor: pointer;
  }
}
</style>

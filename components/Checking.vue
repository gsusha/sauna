<template>
  <div class="checking">
    <BaseHeader>Проверьте запись</BaseHeader>
    <RoomsCard :room="currentRoom" />
    <BaseCard>
      <div class="title">{{ currentDay }}</div>
      <div>{{ currentTime }}</div>
    </BaseCard>
    <div class="row">
      <BaseInput name="Имя" :value="userName" />
      <BaseInput name="Телефон" :value="phone" />
    </div>
    <BaseInput name="Количество гостей" :value="guestCount" />
    <BaseInput name="Комментарий" :value="guestCount" placeholder="необязательно" />
    <div>
      <input type="checkbox" id="isBirthday" class="checkbox" v-model="isBirthday" />
      <label for="checkbox">У меня день рождения</label>
    </div>
    <div class="send">
      <div class="costs">
        <div class="cost">
          <div>Одна услуга</div>
          <div class="sum">{{ cost }}₽</div>
        </div>
        <div v-if="isBirthday">
          <div class="cost sale">
            <div>Скидка на день рождения</div>
            <div class="sum">-{{ sale }}₽</div>
          </div>
          <div class="cost total">
            <div>Итого</div>
            <div class="sum">{{ total }}₽</div>
          </div>
        </div>
      </div>
      <BaseButton @click="sendForm">Забронировать</BaseButton>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { RoomData } from '~/types/room';

const emit = defineEmits(['change-step']);

const userName = ref('');
const phone = ref('');
const guestCount = ref('');
const isBirthday = ref(false);

//TODO: брать из апи
const rooms = hardcodeRooms as RoomData[];
const cost = 3900;
const sale = 100;
const total = 3800;

//TODO: поменять на текущие
const currentRoom = rooms[0];
const currentDay = '1 ноября, среда';
const currentTime = '09:00-11:00, 3 часа';

const sendForm = () => {
  //TODO: отправлять форму
  emit('change-step', 4);
}
</script>
<style lang="scss" scoped>
.checking {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding-bottom: 200px;
}

.card {
  .title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.checkbox {
  margin-right: 10px;
}

.send {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  border-radius: 10px 10px 0 0;
  padding: 20px 10px;

  .costs {
    margin-bottom: 20px;
    .cost {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      &.sale {
        .sum{
          color: #EC2424;
        }
      }

      &.total {
        font-weight: 500;
      }
    }
  }
}
</style>
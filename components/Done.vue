<template>
  <div class="done">
    <BaseHeader>
      <div>
        <div>Спасибо, <span class="name">{{ name }}</span>!</div>
        <div>Вы записаны</div>
      </div>
    </BaseHeader>
    <BaseCard>
      <div class="record">
        <div class="time">{{ day }}, {{ time }}</div>
        <div class="cost">{{ cost }}₽</div>
      </div>
      <div class="sauna">
        ✅ {{ sauna.name }}
      </div>
    </BaseCard>
    <div class="address">
      <div>Ждём вас по адресу:</div>
      <div>{{ sauna.address }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { SaunaData } from '~/types/sauna';

//TODO: брать из апи
const sauna = hardcodeSauna as SaunaData;
const day = '1 ноября';
const time = '09:00';
const cost = 1800;

//TODO: брать из формы
const name = 'Дмитрий';

//TODO: нужно добавить карту, у меня нет токенов
</script>
<style lang="scss" scoped>
.name {
  color: #5FAD56;
}

.record {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
  margin: 0 -10px 10px -10px;
  padding: 10px 10px 20px 10px;
  border-radius: 20px;
  box-shadow: 1px 2px 10px -3px rgba(0, 0, 0, 0.06);
}

.card {
  margin-bottom: 30px;
}

.address {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
</style>
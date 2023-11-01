<template>
  <div class="datetime-picker">
    <BaseHeader>
      Выберите дату и время
    </BaseHeader>
    <div class="sauna">{{ sauna.name }}</div>
    <div class="select-date">
      <div class="title">{{ month }}</div>
      <div class="items">
        <div
            v-for="day in days"
            :key="day.dayOfMonth"
            :class="['item', { weekend: day.isWeekend, active: day.dayOfMonth === selectedDay.dayOfMonth, disabled: day.isDisabled }]"
            @click="selectDate(day)"
        >
          <div class="value">{{ day.dayOfWeek }}</div>
          <div class="value">{{ day.dayOfMonth }}</div>
        </div>
      </div>
    </div>
    <div v-if="selectedDay.dayOfMonth" class="select-time">
      <div class="title">Время</div>
      <div class="items">
        <div
            v-for="time in selectedDay.times"
            :key="time.time"
            :class="['item', { weekend: time.isWeekend, active: isSelected(time), disabled: time.isDisabled }]"
            @click="selectTime(time)"
        >
          <div class="value">{{ time.time }}</div>
          <div class="value price">{{ time.price }} ₽</div>
        </div>
      </div>
    </div>
    <div v-if="selectedTimes.length" class="next">
      <div class="result">
        <div>Выбрано:</div>
        <div>{{ timeInterval }}, {{ getHourString(hoursCount)}} </div>
      </div>
      <BaseButton @click="handleStep">Продолжить</BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { SaunaData } from '~/types/sauna';
import { hardcodeSauna, hardcodeMonth, hardcodeDays } from '~/utils/temp';
import { getHourString } from "~/utils/utils";

const emit = defineEmits(['change-step']);

//TODO: брать из апи
const sauna = hardcodeSauna as SaunaData;
const month = hardcodeMonth;
const days = hardcodeDays;

const selectedDay = ref({});
const selectedTimes = ref([]);

const selectDate = (day: number) => {
  //TODO: выбирать дату
  selectedTimes.value = [];
  selectedDay.value = day;
}

const isSelected = (time: object) => {
  return selectedTimes.value.includes(time);
}

const selectTime = (time: object) => {
  //TODO: выбирать время
  const index = selectedTimes.value.indexOf(time);
  if (index > -1) {
    selectedTimes.value.splice(index, 1);
  } else {
    selectedTimes.value.push(time);
  }
}

const timeInterval = computed(() => {
  if (selectedTimes.value.length > 1) {
    return `${selectedTimes.value.at(0).time} - ${selectedTimes.value.at(-1).time}`;
  }
  if (selectedTimes.value.length) {
    return `${selectedTimes.value.at(0).time}`;
  }
});

const hoursCount = computed(() => {
  if (Array.isArray(selectedTimes.value)) {
    return `${selectedTimes.value.length}`
  }
});

const handleStep = () => {
  //TODO: передать данные куда надо
  emit('change-step', 3);
}
</script>
<style scoped lang="scss">
.datetime-picker {
  padding-bottom: 200px;
}
.sauna {
  padding: 10px;
  background: #FFFFFF;
  border: 2px solid #E6E6E6;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}

.items {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;

  .item {
    background: #E6E6E6;
    border-radius: 10px;
    cursor: pointer;
    .value {
      padding: 5px;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
      pointer-events: none;

      &:last-child {
        font-size: 22px;
      }
    }

    &.weekend {
      color: #EC2424;
    }

    &.active {
      background: #5FAD56;
      color: white;
    }

    &.disabled {
      color: #A9A9A9;
      pointer-events: none;
    }
  }
}

.select-date {
  margin-bottom: 30px;
}

.select-time {
  .items {
    .item {
      .value {
        font-size: 22px;
        &.price {
          font-size: 18px;
          color: #EC2424;
        }
      }
      &.disabled {
        .price {
          color: #A9A9A9;
        }
      }
      &.active {
        .price {
          color: #FFFFFF;
        }
      }
    }
  }
}

.next {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  border-radius: 10px 10px 0 0;
  padding: 20px 10px;

  .result {
    margin-bottom: 20px;
  }
}
</style>

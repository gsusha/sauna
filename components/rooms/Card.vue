<template>
  <BaseCard class="card">
    <div class="img">
      <img
        v-if="props.room.gallery[0]?.url"
        :src="props.room.gallery[0]?.url"
        :alt="props.room.name"
      />
      <div v-else class="no_img"></div>
    </div>
    <div class="content">
      <div class="about">
        <div class="name">{{ props.room.name }}</div>
        <div
            v-if="props.showInfo"
            @click.stop="showDescription = !showDescription"
            :class="['info', { active: showDescription }]"
        >
          i
        </div>
      </div>
      <div v-if="roomFunction.length" class="functions">
        <div v-for="func in roomFunction" class="function">{{ func }}</div>
      </div>
      <div
          v-if="props.showInfo"
          :class="['description', { active: showDescription }]"
      >
        <div v-if="props.room.gallery.length" class="images">
          <div
              v-for="gallery_item in props.room.gallery"
              :key="gallery_item.id"
              class="image"
          >
            <img :src="gallery_item.url" :alt="gallery_item.alt" />
          </div>
        </div>
        <div>{{ props.room.description }}</div>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import type { RoomData } from '~/types/room';

const props = defineProps<{
  room: RoomData;
  showInfo?: boolean;
}>();

const showDescription = ref(false);

//TODO: брать из апи
const roomFunction = ['Купель', '6 чел', 'с бассейном', 'wi-fi']
</script>
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  .img {
    height: 150px;
    max-width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px 20px 0 0;
    }
    .no_img {
      width: 100%;
      height: 100%;
      background: #cacaca;
      border-radius: 20px 20px 0 0;
    }
  }
  .content {
    padding: 15px 10px;
    .about {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 10px;
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 20px;
        min-height: 20px;
        outline: 1px solid #5fad56;
        border-radius: 50%;
        color: #5fad56;
        font-weight: 500;
        transition: 0.3s;
        &.active {
          background: #5fad56;
          color: #ffffff;
        }
      }
    }
    .functions {
      display: flex;
      color: #5FAD56;
      .function {
        margin-right: 20px;
        position: relative;
        &:before {
          content: '';
          display: block;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: #5FAD56;
          position: absolute;
          top: 50%;
          right: -10px;
        }
        &:last-child {
          margin: 0;
          &:before {
            display: none;
          }
        }
      }
    }
    .description {
      max-height: 0;
      transition: 0.3s;
      opacity: 0;
      pointer-events: none;
      color: #B6B6B6;
      &.active {
        opacity: 1;
        max-height: 100%;
        margin: 10px 0 0 0;
        pointer-events: auto;
      }
      .images {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        margin: 0 0 20px 0;
        .image {
          img {
            border-radius: 20px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>

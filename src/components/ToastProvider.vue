<template>
    <slot />

    <div class="fixed w-[250px] h-full right-0 top-0">
        <transition-group tag="div" class="number-list" name="list">
            <div v-for="(item, index) in notifications" :key="index" 
                class="item p-4 m-2 border border-solid rounded-md text-center" 
                :class="[item.bg, item.borderColor]"
            >{{ item.title }}</div>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { state, conf } from "../composables/notifications";

export default {
  data() {
    return {
      notifications: state.notifications,
    };
  },
}
</script>

<style>

.number-list {
  overflow: hidden;
  padding: 0;

  > div {
    display: block;
    float: left;
    text-align: center;
    line-height: 35px;
    width: 200px;
  }
}

.list-enter-active,
.list-leave-active,
.list-move {
  transition: opacity 0.7s, transform 0.7s;
}

.list-leave-active {
  position: absolute;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(0px);
}
</style>
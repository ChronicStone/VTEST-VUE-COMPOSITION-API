<template>
  <div
    class="absolute h-full right-0 max-h-screen p-4 max-w-64 flex flex-col gap-4 overflow-y-auto overflow-x-hidden"
  >
    <TransitionGroup name="list">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="p-3 rounded-lg border border-solid w-full"
        :class="{
          'border-indigo-500 bg-indigo-100': toast.type === 'INFO',
          'bg-green-100 border-green-500': toast.type === 'SUCCESS',
          'bg-red-100 border-red-500': toast.type === 'ERROR',
        }"
      >
        {{ toast.message }}
      </div>
    </TransitionGroup>
  </div>
  <slot />
</template>

<script setup lang="ts">
import { provide, reactive } from "vue";
import { Toast } from "../types";

const toasts: Toast[] = reactive([]);

provide("toasts", toasts);
</script>

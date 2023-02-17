<template>
  <slot />
  <TransitionGroup name="list" tag="ul" class="absolute h-full m-0 list-none top-0 right-0 max-h-screen p-4 max-w-64 flex flex-col gap-4 overflow-y-auto overflow-x-hidden">
    <li class="p-3 rounded-lg border border-solid w-full" :class="theme[toast.type]" v-for="toast in toasts" :key="toast.id">
      {{ toast.message }}
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">

  import { provide } from 'vue';
  import { ToastCreateKey } from '../constants/injectionKeys';
  import { useToast } from '../composables/useToast';

  const { toasts, createToast } = useToast();
  
  provide(ToastCreateKey, createToast)

  const theme: { [key: string]: string } = {
    Info: 'border-indigo-500 bg-indigo-100',
    Success: 'border-green-500 bg-green-100',
    Error: 'border-red-500 bg-red-100'
  }
</script>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
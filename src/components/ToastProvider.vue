<template>
  <div class="absolute h-full right-0 max-h-screen p-4 max-w-64 flex flex-col gap-4 overflow-y-auto overflow-x-hidden">
      <!-- <toast
        v-for="(toast, idx) in toasts"
        :key="idx"
        :type="toast.type">
          {{ toast.message }}
      </toast> -->
      <render-toast
        v-for="(toast, idx) in toasts"
        :key="idx"
        :dislay="toast"
      >
      </render-toast>
  </div>
  <slot/>
</template>

<script setup lang="ts">
// import Toast from './Toast.vue'
import RenderToast from './RenderToast.vue'
import { useToastEl } from '../composables/useToast'
const toasts = useToastEl()
</script>
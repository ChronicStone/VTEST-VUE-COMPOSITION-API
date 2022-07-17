<template>
  <div class="absolute h-full right-0 max-h-screen p-4 max-w-64 flex flex-col gap-4 overflow-y-auto overflow-x-hidden">
      <toast
        v-for="(toast, idx) in toasts"
        :key="idx"
        :idx="idx"
        :type="toast"
      >
      </toast>
  </div>
  <slot/>
</template>

<script setup lang="ts">
// imports
import Toast from './Toast.vue'
import { useToast } from '../composables/useToast'

//  Composables
const toasts = useToast()
</script>
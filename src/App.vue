<template>
  <div class="flex flex-col items-center justify-center gap-4 w-screen h-screen">
    <button
      class="p-4 bg-blue-100 border border-solid border-blue-900 rounded-md"
      @click="onAddToast('This is an info toast', 'INFO')"
    >
      SHOW INFO TOAST
    </button>
    <button
      class="p-4 bg-green-100 border border-solid border-green-900 rounded-md"
      @click="onAddToast('This is a success toast', 'SUCCESS')"
    >
      SHOW SUCCESS TOAST
    </button>
    <button
      class="p-4 bg-red-100 border border-solid border-red-900 rounded-md"
      @click="onAddToast('This is an error toast', 'ERROR')"
    >
      SHOW ERROR TOAST
    </button>
  </div>
</template>

<script setup lang="tsx">
import Toast from './Toast.vue'
import { TOAST_TYPES } from './lib/types'
import { useToastEl } from './composables/useToast'
const toastEl = useToastEl()
function onAddToast (message: string, type: TOAST_TYPES) : void {
  const el = <toast :type="type"> {{ message }} </toast>
  toastEl.push(
    el
  )
}
defineExpose({
  onAddToast,
})
</script>
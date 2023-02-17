<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen gap-4">
    <button @click="createToast(toasts.info)" class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md">
      SHOW INFO TOAST
    </button>

    <button @click="createToast(toasts.success)" class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md">
      SHOW SUCCESS TOAST
    </button>

    <button @click="createToast(toasts.error)" class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md">
      SHOW ERROR TOAST
    </button>
  </div>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  import { Toast } from './composables/useToast'
  import { ToastCreateKey } from './constants/injectionKeys';

  const toasts: { [key: string]: Toast } = {
    info: { 
      type: 'Info',
      message: 'This is an error toast',
      duration: 2000 
    },
    success: {
      type: 'Success',
      message: 'This is an error toast',
      duration: 3000
    },
    error: {
      type: 'Error',
      message: 'This is an error toast',
      duration: 4000
    }    
  }

  const addToast = inject<Function>(ToastCreateKey, () => {})
  const createToast = (toast: Toast) => addToast(toast)

</script>
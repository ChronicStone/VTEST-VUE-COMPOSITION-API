<template>
  <div class="flex flex-col items-center justify-center gap-4 w-screen h-screen">
    <button 
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click="showToast('This is an info', 'indigo')">
      SHOW INFO TOAST
    </button>
    <button 
      class="p-4 bg-indigo-100 border border-solid border-green-500 rounded-md"
      @click="showToast('This is a success', 'green')">
      SHOW SUCCESS TOAST
    </button>
    <button 
      class="p-4 bg-indigo-100 border border-solid border-red-500 rounded-md"
      @click="showToast('This is an error', 'red')">
      SHOW ERROR TOAST
    </button>
  </div>
</template>

<script setup lang="ts">
  import {inject} from 'vue';
  import { showToastSymbol} from './constants/injectionKeys'

  const showToast = inject(showToastSymbol) as Function

</script>



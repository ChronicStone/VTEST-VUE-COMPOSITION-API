<template>
  <div class="flex flex-col items-center justify-center gap-4 w-screen h-screen">
    <button
      class="p-4 bg-blue-100 border border-solid border-blue-900 rounded-md"
      @click="addToast(infoLabel.toastType)"
    >
      {{ infoLabel.label }}
    </button>
    <button
      class="p-4 bg-green-100 border border-solid border-green-900 rounded-md"
      @click="addToast(successLabel.toastType)"
    >
      {{ successLabel.label }}
    </button>
    <button
      class="p-4 bg-red-100 border border-solid border-red-900 rounded-md"
      @click="addToast(errorLabel.toastType)"
    >
      {{ errorLabel.label }}
    </button>
  </div>
</template>

<script setup lang="tsx">
// Imports
import { addToast } from './composables/useToast'
import { inject } from 'vue'
import { IButtonToast, infoLabelKey, successLabelKey, errorLabelKey } from './constants/injectionKeys'

// Injects
const infoLabel = inject<IButtonToast>(infoLabelKey)
const successLabel = inject<IButtonToast>(successLabelKey)
const errorLabel = inject<IButtonToast>(errorLabelKey)
defineExpose({
  addToast,
})
</script>
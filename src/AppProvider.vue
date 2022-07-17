<template>
  <ToastProvider>
    <App />
  </ToastProvider>
</template>

<script setup lang="ts">
// Libraries
import { provide } from 'vue'

// constants
import { infoLabelKey, successLabelKey, errorLabelKey } from './constants/injectionKeys'

// Components
import ToastProvider from './components/ToastProvider.vue';
import App from './App.vue';

// Provides
provide(infoLabelKey, {
  label: 'SHOW INFO TOAST',
  message: 'This is an info toast',
  toastType: 'INFO',
  delay: 1000,
})
provide(successLabelKey, {
  label: 'SHOW SUCCESS TOAST',
  message: 'This is a success toast',
  toastType: 'SUCCESS',
  delay: 2000,
})
provide(errorLabelKey, {
  label: 'SHOW ERROR TOAST',
  message: 'This is an error toast',
  toastType: 'ERROR',
  delay: 5000,
})

</script>

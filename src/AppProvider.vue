<template>
  <ToastProvider>
    <App />
  </ToastProvider>
</template>

<script setup>
import ToastProvider from './components/ToastProvider.vue';
import App from './App.vue';

import { provide } from 'vue';
import { apiNotification } from './composables/notifications.js'

provide('toast', apiNotification)
</script>

<template>
  <div>
    <button>
      SHOW INFO TOAST
    </button>

    <button>
      SHOW SUCCESS TOAST
    </button>

    <button>
      SHOW ERROR TOAST
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useToast } from './composables/useToast';
  const toastApi = useToast()
</script>
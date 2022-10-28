<template>
  <div
    class="flex flex-col items-center justify-center gap-4 w-screen h-screen"
  >
    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click="createInfoToast"
    >
      SHOW INFO TOAST
    </button>

    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click="createSuccessToast"
    >
      SHOW SUCCESS TOAST
    </button>

    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click="createErrorToast"
    >
      SHOW ERROR TOAST
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "./composables/useToast";
const toastApi = useToast();
const { createToast, destroyAllToasts } = toastApi;

const createInfoToast = () => {
  createToast("INFO", "This is an info toast");
};

const createSuccessToast = () =>
  createToast("SUCCESS", "This is a success toast");

const createErrorToast = () => createToast("ERROR", "This is an error toast");
</script>

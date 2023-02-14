<template>
  <div class="flex flex-col items-center justify-center gap-4 w-screen h-screen">
    <button class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md" @click="onInfoToast">
      SHOW INFO TOAST
    </button>

    <button class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md" @click="onSuccessToast">
      SHOW SUCCESS TOAST
    </button>

    <button class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md" @click="onErrorToast">
      SHOW ERROR TOAST
    </button>
  </div>
</template>

<script  lang="ts">
  import { inject } from 'vue';

  export default {
    setup() {
      const toastApi = inject('toast');

      return {
        toastApi,
      }
    },

    methods: {
      onInfoToast() {
        this.toastApi.new({
            title: "SHOW INFO TOAST",
            bg: "bg-indigo-100",
            borderColor: "border-indigo-500"
        });
      },

      onSuccessToast() {
        this.toastApi.success({
            title: "SHOW SUCCESS TOAST",
            bg: "bg-green-100",
            borderColor: "border-green-500"
        });
      },

      onErrorToast() {
        this.toastApi.error({
            title: "SHOW ERROR TOAST",
            bg: "bg-red-100",
            borderColor: "border-red-500"
        });
      },
    },
  };
</script>
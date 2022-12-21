<template>
    <div class="app-container">
            <transition-group name="toast" tag="div" class="toast-channel">
                <div v-for="toast in toasts" 
                     :class="`p-4 m-5 border border-solid border-${toast.bgcolor}-500 rounded-md bg-${toast.bgcolor}-100 toast-box`"
                     :key="toast.id.toString()"
                     :id="toast.id.toString()">
                    {{ toast.toastmessage }}
            </div>
            </transition-group>
        <div class="slots">
            <slot />
        </div>
    </div>
</template>
  


<script setup lang="ts">
    import { useToast } from '../composables/useToast'
    import { provide } from 'vue'
    import { showToastSymbol, toastArraySymbol } from '../constants/injectionKeys'

    const { toasts, showToast } = useToast()

    provide(toastArraySymbol, toasts)
    provide(showToastSymbol, showToast)

</script>
  
<style >
    .app-container {
        background-color: #fff;
        color: #000;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .slots {
        position: absolute;
        top: 100px;
        width: 100%;
        z-index: 0;
    }
 
    .toast-channel {
        position: relative;
        width: 200px;
        max-width: 300px;
        margin-left: auto;
        margin-right: 30px;
        z-index: 5;
    }

   .toast-box {
        position: relative;
        display: block;
        width: 200px;
        color: #000;
        z-index: 5;
    }

    .toast-move {
        transition: transform 1.2s ease;
    }

    .toast-enter-active {
        transition: all 1s ease-out;
    }

    .toast-leave-active {
    transition: all 1s ease-out;
    position: absolute;
    }

    .toast-enter-from, .toast-leave-to {
        opacity: 0;
        transform: translateX(200px);
    }

    .toast-enter-to, .toast-leave-from {
        opacity: 1;
        transform: translateX(0);
    }

  </style>
  
<template>
  <div
    class="p-3 rounded-lg border border-solid w-full list-leave-active list-leave-to  transform ease-in-out duration-500"
    :class="TOAST_STYLES[type]"
  >
    <slot>
      {{ message }} {{ delay }}
    </slot>
  </div>
</template>

<script setup lang="ts">
// imports
import { TOAST_TYPES } from "../lib/types";
import { onMounted } from '@vue/runtime-core'
import { inject } from 'vue'
import { TOAST_STYLES } from '../lib/types'
import { popToast } from '../composables/useToast'
import { IButtonToast, infoLabelKey, successLabelKey, errorLabelKey } from '../constants/injectionKeys'

// Interfaces
interface Props {
  idx: number,
  type: TOAST_TYPES
}

// Props
const props = defineProps<Props>()
const { delay, message } = getToastConfig()

function getToastConfig () :IButtonToast {
  const info = inject<IButtonToast>(infoLabelKey)
  const success = inject<IButtonToast>(successLabelKey)
  const error = inject<IButtonToast>(errorLabelKey)
  if (props.type === 'INFO') return info as IButtonToast
  if (props.type === 'SUCCESS') return success as IButtonToast
  if (props.type === 'ERROR') return error as IButtonToast
  throw new Error('No such type')
}

onMounted(() => {
  setTimeout(() => {
    popToast()
  }, 5000)
})

defineExpose({
  TOAST_STYLES,
  message,
})

</script>
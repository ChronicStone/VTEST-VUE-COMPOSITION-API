<template>
  <div
    class="p-3 rounded-lg border border-solid w-full list-leave-active list-leave-to  transform ease-in-out duration-500"
    :class="TOAST_STYLES[type]"
  >
    <slot/>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: string
  delay?: number
}
import { onMounted } from '@vue/runtime-core'
import { TOAST_STYLES } from '../lib/types'
import { popToast } from '../composables/useToast'

const props = withDefaults(defineProps<Props>(), {
  delay: 3000,
})

onMounted(() => {
  setTimeout(() => {
    popToast()
  }, props.delay)
})

defineExpose({
  TOAST_STYLES,
})

</script>
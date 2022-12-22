import { ref, onMounted } from 'vue'
import {ToastArr} from '../types'


export const useToast = () => {
  const timer = ref<ReturnType<typeof setTimeout>>()
  const toasts = ref<ToastArr[]>([])
  
  const showToast = (message: string, bgcolor: string) => {
    const id: number = Math.random() * 10000
    toasts.value.push({toastmessage: message, bgcolor: bgcolor, id: id})
    timer.value = setTimeout(() => {
      toasts.value = toasts.value.filter( (toast => toast.id !== id))
    }, 3000)
  }

  onMounted(() => {
    return () => {
      clearTimeout(timer.value)
    }
  })

  return {
    toasts,
    showToast,
  }
}

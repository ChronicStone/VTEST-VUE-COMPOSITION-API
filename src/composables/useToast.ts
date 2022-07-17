import { reactive } from 'vue'
import { ToastType, TOAST_TYPES } from '../lib/types'

const store = reactive({
  toasts: [] as ToastType[],
  toastEl: [] as any,
})

export function useToast() :ToastType[] {
    return store.toasts as ToastType[]
}

export function useToastEl() :any[] {
  return store.toastEl as any[]
}

export function addToast (message: string, type: TOAST_TYPES) :void {
  store.toasts.push({ message, type })
}

export function popToast () {
  store.toasts.splice(0, 1)
}
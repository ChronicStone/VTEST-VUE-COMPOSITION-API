import { reactive } from 'vue'
import { ToastType, TOAST_TYPES } from '../lib/types'

const store = reactive({
  toasts: [] as TOAST_TYPES[],
})

export function useToast() :TOAST_TYPES[] {
    return store.toasts as TOAST_TYPES[]
}

export function addToast (type: TOAST_TYPES) :void {
  store.toasts.push(type)
}

export function popToast () {
  store.toasts.splice(0, 1)
}

export function spliceToast (idx: number) {
  store.toasts.splice(idx, 1)
}

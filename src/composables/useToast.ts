
import { ref } from 'vue'
export interface Toast {
    type: 'Info' | 'Success' | 'Error',
    message: string,
    duration: number,
    id?: number
}

const toasts = ref<Toast[]>([]);

export function useToast() {
    let id: number = 0;
    
    // create toast
    function createToast(toast: Toast) {
        const _toast: Toast = {...toast, id: id++}
        toasts.value.push(_toast)
        setTimeout(() => destroyToast(_toast), _toast.duration)
    }

    // destroy toasts
    function destroyToast(toast: Toast) {
        toasts.value.splice(toasts.value.indexOf(toast), 1)
    }

    return {
        toasts,
        createToast
    }
}
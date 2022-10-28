import { inject, ref } from "vue";
import type { Toast } from "./../types";
import { TOAST_KEY } from "../constants/injectionKeys";

export function useToast() {
  const toasts: Toast[] = inject(TOAST_KEY, []);

  function createToast(
    type: Toast["type"] = "INFO",
    message: Toast["message"],
    duration: Toast["duration"] = 2000
  ) {
    const id = toasts.length.toString();
    const toast = ref({ id, type, message, duration });
    toasts.push(toast.value);

    setTimeout(() => {
      toasts.splice(toasts.indexOf(toast.value), 1);
    }, duration);

    return toast;
  }

  function destroyAllToasts() {
    toasts.length = 0;
  }

  return {
    toasts,
    createToast,
    destroyAllToasts,
  };
}

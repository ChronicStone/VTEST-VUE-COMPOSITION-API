import type { InjectionKey } from 'vue'
import { TOAST_TYPES } from '../lib/types'

export interface IButtonToast {
  label: string
  message: string
  toastType: TOAST_TYPES
  delay?: number
}

export const infoLabelKey = Symbol() as InjectionKey<IButtonToast>

export const errorLabelKey = Symbol() as InjectionKey<IButtonToast>

export const successLabelKey = Symbol() as InjectionKey<IButtonToast>


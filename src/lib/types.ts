export enum TOAST_STYLES {
  INFO = 'bg-blue-100 border-blue-900',
  SUCCESS = 'bg-green-100 border-green-900',
  ERROR = 'bg-red-100 border-red-900',
}

export type TOAST_TYPES = 'INFO' | 'SUCCESS' | 'ERROR'

export interface ToastType {
  message: string,
  type: TOAST_TYPES,
  delay?: number
}
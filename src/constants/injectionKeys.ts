import type { InjectionKey } from "vue";
import type { Toast } from "../types";

export const TOAST_KEY = Symbol() as InjectionKey<Toast[]>;

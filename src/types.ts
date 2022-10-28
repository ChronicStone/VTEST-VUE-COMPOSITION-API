export interface Toast {
  id: string;
  type: "INFO" | "SUCCESS" | "ERROR";
  message: string;
  duration: number;
}

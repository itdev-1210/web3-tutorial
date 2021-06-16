export interface ToastsState {
  type: string,
  title: string,
  description?: string,
  call: boolean
}

export interface State {
  toasts: ToastsState,
}
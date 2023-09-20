export interface ButtonType {
  type?: 'button' | 'submit' | 'reset' | undefined
  color?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | undefined
  disabled?: boolean
  outline?: boolean
}

export interface AlertTypes {
  title: string
  description?: string
  type?: 'default' | 'success' | 'warning' | 'info' | 'error'
  open?: boolean
}

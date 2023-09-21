export interface ProgressType {
  percentage?: number
  type?: 'line' | 'circle' | 'dashboard'
  textInside?: boolean
  status?: 'success' | 'exception' | 'warning' | ''
  width?: number
}


export interface BadgeType {
  value?: number,
  max?: number,
  isDot?: boolean,
  hidden?: boolean,
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
}

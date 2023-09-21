export interface InputType {
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'range'
    | 'search'
    | 'tel'
    | 'url'
    | 'time'
    | 'week'
    | 'number'
    | 'file'
    | 'date'
  placeholder?: string
  clearable?: boolean
  showPassword?: boolean
  disabled?: boolean
}

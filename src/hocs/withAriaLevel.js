import { Platform } from 'react-native'
import { KegText } from 'KegText'

export const withAriaLevel = (element, extraProps) => {
  const ariaLevel = Platform.OS == 'web' ? { 'aria-level': `${level}` } : {}
  return KegText(element, { ...extraProps, ...ariaLevel })
}

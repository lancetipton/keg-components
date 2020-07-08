import { useDimensions } from '@simpleviewinc/re-theme'
import { useThemePath } from './useThemePath'

export const useThemeWithHeight = (themePath, styles) => {
  const dimensions = useDimensions()

  return useThemePath(themePath, {
    ...styles,
    height: dimensions.height,
  })
}

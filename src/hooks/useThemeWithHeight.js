import { useDimensions } from '@simpleviewinc/re-theme'
import { useThemePath } from './useThemePath'

export const useThemeWithHeight = (themePath, styles) => {
  const dimensions = useDimensions()
  console.log(styles)
  const test = useThemePath(themePath, {
    height: dimensions.height,
    ...styles,
  })
  console.log(test)

  return test
}

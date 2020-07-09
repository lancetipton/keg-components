import { useDimensions, useTheme } from '@simpleviewinc/re-theme'
import { useThemePath } from './useThemePath'
import { get } from 'jsutils'

/**
 * Adds height property to specified styles object with a value equal to the window/screen height
 * @param {string} themePath - Path to the styles on the theme
 * @param {Object} styles - Custom styles to override the theme styles
 * @param {string} key - object in styles to add height property to
 *
 * @returns {array} - styles object with height equal to window/screen height
 */
export const useThemeWithHeight = (themePath, styles, key) => {
  const dimensions = useDimensions()
  const theme = useTheme()

  let stylesWithHeight
  if (styles) {
    stylesWithHeight = theme.join(
      { height: dimensions.height },
      get(styles, [key])
    )
    const allStyles = theme.join({ [key]: stylesWithHeight }, styles)

    return useThemePath(themePath, {
      ...allStyles,
    })
  }
  else {
    stylesWithHeight = { height: dimensions.height }

    return useThemePath(themePath, {
      [key]: stylesWithHeight,
    })
  }
}

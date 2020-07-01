import React from 'react'
import { withTheme } from '@simpleviewinc/re-theme'
import { Text as RNText } from 'react-native'

const ellipsisProps = {
  ellipsizeMode: 'tail',
  numberOfLines: 1,
}
export const KegText = (element, extraProps = {}) => {
  return withTheme(props => {
    const { children, style, theme, ellipsis, ...attrs } = props

    // Get the styles for the text element
    const textStyles = theme.get(
      'typography.reset',
      'typography.font.family',
      'typography.default',
      element && `typography.${element}`
    )

    return (
      <RNText
        {...extraProps}
        {...attrs}
        {...(ellipsis && ellipsisProps)}
        style={theme.join(textStyles, style)}
      >
        { children }
      </RNText>
    )
  })
}

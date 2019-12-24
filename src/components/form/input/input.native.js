import React from 'react'
import { withTheme } from 're-theme'
import { get } from 'jsutils'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

export const Input = withTheme(props => {
  const { theme, children, style, onClick, onPress, onChange, ...args } = props

  return (
    <TextInput
      { ...args }
      style={ theme.join(get(theme, ['form', 'input' ]), style) }
      onChangeText={ onChange }
      onPress={ onClick || onPress }
    />
  )
})
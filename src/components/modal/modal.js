import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { useTheme } from '@simpleviewinc/re-theme'
import { useThemePath } from 'KegHooks'
import { View } from 'KegView'
import { noOp } from 'KegUtils'
import { useDimensions } from '@simpleviewinc/re-theme'
import { get } from 'jsutils'

const getModalHeight = () => {
  const dimensions = useDimensions()
  return { height: dimensions.height }
}

/**
 * Simple popup modal using fixed positioning.
 * @param {Object} props
 * @param {Boolean} props.visible - if true, show the modal, else hide it
 * @param {Function} props.onBackdropTouch - the function to execute when the user selects/touches outside the modal; defaults to noOp
 */
export const Modal = props => {
  const {
    visible = false,
    styles,
    onBackdropTouch = noOp,
    children,
    themePath,
    type = 'default',
  } = props

  if (!visible) return null

  const [modalStyles] = useThemePath(themePath || `modal.${type}`, styles)
  const theme = useTheme()

  return (
    <View>
      <TouchableOpacity
        onPressOut={onBackdropTouch}
        activeOpacity={1}
      >
        <View style={modalStyles.backdrop} />
      </TouchableOpacity>
      <View style={theme.join(get(modalStyles, ['main']), getModalHeight())}>
        { children }
      </View>
    </View>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
  styles: PropTypes.object,
  onBackdropTouch: PropTypes.func,
}

import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { useThemePath } from 'KegHooks'
import { View } from 'KegView'
import { noop } from 'KegUtils'

/**
 * Simple popup modal using fixed positioning.
 * @param {Object} props
 * @param {Boolean} props.visible - if true, show the modal, else hide it
 * @param {Function} props.touchBackdrop - the function to execute when the user selects/touches outside the modal; defaults to noop
 */
export const Modal = props => {
  const {
    visible = false,
    styles,
    touchBackdrop = noop,
    children,
    themePath,
    type = 'default',
  } = props

  if (!visible) return null

  const [modalStyles] = useThemePath(themePath || `modal.${type}`, styles)

  return (
    <View>
      <TouchableOpacity
        onPressOut={touchBackdrop}
        activeOpacity={1}
      >
        <View style={modalStyles.backdrop} />
      </TouchableOpacity>
      <View style={modalStyles.main}>{ children }</View>
    </View>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
  styles: PropTypes.object,
  touchBackdrop: PropTypes.func,
}

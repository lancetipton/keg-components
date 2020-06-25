import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { useThemePath } from 'KegHooks'
import { View } from 'KegView'
import { noop } from '../../utils'

/**
 * Simple popup modal using fixed positioning.
 * @param {Object} props
 * @param {Boolean} props.visible - if true, show the modal, else hide it
 * @param {Function} props.touchBackdrop - the function to execute when the user selects/touches outside the modal; defaults to noop
 */
export const Modal = ({
  visible = false,
  styles,
  touchBackdrop = noop,
  ...props
}) => {
  const { children, themePath, type = 'default' } = props
  const [modalStyles] = useThemePath(themePath || `modal.${type}`, styles)
  return visible ? (
    <View>
      <TouchableWithoutFeedback onPress={touchBackdrop}>
        <View style={modalStyles.backdrop} />
      </TouchableWithoutFeedback>
      <View style={modalStyles.main}>{ children }</View>
    </View>
  ) : null
}

Modal.propTypes = {
  visible: PropTypes.bool,
  styles: PropTypes.object,
  touchBackdrop: PropTypes.func,
}

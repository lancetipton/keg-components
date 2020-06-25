import React from 'react'
import PropTypes from 'prop-types'
import { useThemePath } from 'KegHooks'
import { View } from 'KegView'

/**
 * Simple popup modal in absolute positioning with a title, text, and dismiss button.
 * @param {Object} props
 * @param {Boolean} props.visible - if true, show the modal, else hide it
 * @param {Function} props.onDismiss - the function to execute when the user selects the dismiss button
 */
export const Modal = ({ visible = false, styles, ...props }) => {
  const { children, themePath, type = 'default' } = props
  const [modalStyles] = useThemePath(themePath || `modal.${type}`, styles)
  return visible ? (
    <View>
      <View style={modalStyles.main}>{ children }</View>
      <View style={modalStyles.backdrop}></View>
    </View>
  ) : null
}

Modal.propTypes = {
  visible: PropTypes.bool,
  styles: PropTypes.object,
}

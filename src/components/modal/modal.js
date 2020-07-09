import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { useThemeWithHeight } from 'KegHooks'
import { View } from 'KegView'
import { noOp } from 'KegUtils'

/**
 * Simple popup modal using fixed positioning.
 * @param {Object} props
 * @param {Boolean} visible - if true, show the modal, else hide it
 * @param {Object} styles - styles object which overrides default theme styles
 * @param {Function} onBackdropTouch - the function to execute when the user selects/touches outside the modal; defaults to noOp
 * @param {Component} children - the component(s) to render inside the modal
 * @param {String} themePath - path to a theme file containing the following properties:
 *  - main: styles for the modal
 *  - backdrop: styles for the background behind the modal
 * @param {String} type - type of modal (points to styles in theme file with that type); default is 'default'
 * @param {Number} activeOpacity - changes opacity of background when touched/clicked; default is 1
 */
export const Modal = props => {
  if (!props.visible) return null

  const {
    styles,
    onBackdropTouch = noOp,
    children,
    themePath,
    type = 'default',
    activeOpacity = 1,
  } = props

  const [modalStyles] = useThemeWithHeight(
    themePath || `modal.${type}`,
    styles,
    'main'
  )

  return (
    <View>
      <TouchableOpacity
        onPressOut={onBackdropTouch}
        activeOpacity={activeOpacity}
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
  onBackdropTouch: PropTypes.func,
}

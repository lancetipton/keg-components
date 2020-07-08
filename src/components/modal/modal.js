import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { useThemeWithHeight } from 'KegHooks'
import { View } from 'KegView'
import { noOp } from 'KegUtils'

/**
 * Simple popup modal using fixed positioning.
 * @param {Object} props
 * @param {Boolean} props.visible - if true, show the modal, else hide it
 * @param {Function} props.onBackdropTouch - the function to execute when the user selects/touches outside the modal; defaults to noOp
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

  const [modalStyles] = useThemeWithHeight(themePath || `modal.${type}`, styles)
  // const modalStyles = {main: {
  //   zIndex: 100010,
  //   position: 'fixed',
  //   top: '50%',
  //   right: '50%',
  //   left: 'auto',
  //   transform: 'translate(50%, -50%)',
  //   boxSizing: 'border-box',
  //   width: '400px',
  //   maxWidth: '80%',
  //   maxHeight: '600px',
  //   padding: '15px',
  //   borderRadius: 4,
  //   backgroundColor: '#fff',
  // },
  // backdrop: {
  //   zIndex: 100000,
  //   position: 'fixed',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(1,1,1,0.2)',
  // }}

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

import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Animated } from 'react-native'
import PropTypes from 'prop-types'
import { useThemeWithHeight } from 'KegHooks'
import { View } from 'KegView'
import { noOp } from 'KegUtils'
import { Dimensions } from 'react-native'
import { useTheme } from '@simpleviewinc/re-theme'
import { get } from 'jsutils'
import { isValidComponent } from 'KegUtils'

/**
 * Modal wrapper to allow caller to pass in custom animation and styles
 * @param {object} params
 * @param {Component} params.ModalContainer custom component with its own animation and styles
 * @param {Object} params.modalStyles default modal styles used if no ModalContainer is passed in
 * @param {Component} params.children children components
 * @param {object} params.props
 */
const DefaultAnimationView = ({
  ModalContainer,
  modalStyles,
  children,
  ...props
}) => {
  if (isValidComponent(ModalContainer))
    return <ModalContainer>{ children }</ModalContainer>

  // use the state to keep track of whether the modal has animated yet
  const [ animated, setAnimated ] = useState(false)
  let slideVal = new Animated.Value(0)

  // Set default duration; second argument is empty array so animation function
  // only runs on initial render; when finished with animation, call setAnimated to set flag to true
  useEffect(() => {
    Animated.timing(slideVal, {
      toValue: 1,
      duration: 500,
    }).start(() => setAnimated(true))
  }, [])

  // get modal style default height to set initial animation offset
  const theme = useTheme()
  const animationOffset = get(theme, 'modal.default.main.maxHeight', 600) / 2
  const slideUp = slideVal.interpolate({
    inputRange: [ 0, 1 ],
    outputRange: [ Dimensions.get('window').height + animationOffset, 0 ],
  })

  return (
    <Animated.View
      style={{
        ...modalStyles.main,
        transform: animated ? null : [{ translateY: slideUp }],
      }}
    >
      { children }
    </Animated.View>
  )
}

/**
 * Simple popup modal using fixed positioning.
 * @param {Object} params
 * @param {Boolean} params.visible - if true, show the modal, else hide it
 * @param {Object} params.styles - styles object which overrides default theme styles
 * @param {Function} params.onBackdropTouch - the function to execute when the user selects/touches outside the modal; defaults to noOp
 * @param {Component} params.children - the component(s) to render inside the modal
 * @param {String} params.themePath - path to a theme file containing the following properties:
 *  - main: styles for the modal
 *  - backdrop: styles for the background behind the modal
 * @param {String} params.type - type of modal (points to styles in theme file with that type); default is 'default'
 * @param {Number} params.activeOpacity - changes opacity of background when touched/clicked; default is 1
 * @param {Component} params.ModalContainer - pass a custom component to completely override the modal content
 */
export const Modal = props => {
  if (!props.visible) return null

  const {
    styles,
    onBackdropTouch = noOp,
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
    <View style={modalStyles.wrapper}>
      <TouchableOpacity
        style={modalStyles.backdrop}
        onPressOut={onBackdropTouch}
        activeOpacity={activeOpacity}
      />
      <DefaultAnimationView
        modalStyles={modalStyles}
        {...props}
      />
    </View>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
  styles: PropTypes.object,
  onBackdropTouch: PropTypes.func,
  ModalContainer: PropTypes.Component,
}

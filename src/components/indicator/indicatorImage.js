import React from 'react'
import { useTheme } from 're-theme'
import { get, isStr, uuid } from 'jsutils'
import { indicatorUri } from './indicatorUri'
import { getImgSrc, getOnLoad } from '../../utils'
import { View } from '../'

const buildStyles = (theme, style, styles, styleId, isWeb) => {
  const built = {}
  styleId = styleId || `${uuid()}-${ isWeb ? 'web' : 'native' }-indicator`

  built.img = theme.get(
    `${styleId}-image`,
    [ 'components', 'indicator', 'image' ],
    styles.image,
    style,
  )

  built.wrapper = theme.get(
    `${styleId}-wrapper`,
    [ 'components', 'indicator', 'wrapper' ],
    styles.wrapper,
  )

  return built
}


export const IndicatorImage = props => {
  const { alt, ImgComp, isWeb, resizeMode, src, source, style, styles, styleId } = props
  const theme = useTheme()
  const builtStyles = buildStyles(theme, style, styles || {}, styleId, isWeb)

  return (
    <View style={ builtStyles.wrapper } >
      <ImgComp
        alt={ alt || 'Loading' }
        style={ builtStyles.img }
        resizeMode={ resizeMode || 'contain' }
        { ...getImgSrc(isWeb, src, source, indicatorUri) }
      />
    </View>
  )
}
import { modal as defaults } from '../defaults.json'
import { flex } from '../flex'
import { helpers } from '../helpers'
import { colors } from '../colors'

export const modal = {
  default: {
    wrapper: {
      ...flex.center,
      ...helpers.abs,
      position: 'fixed',
    },
    main: {
      $xsmall: {
        zIndex: 100010,
        boxSizing: 'border-box',
        width: defaults.width,
        maxWidth: '90%',
        maxHeight: 600,
        padding: 0,
        borderRadius: 4,
        backgroundColor: colors.palette.white01,
      },
      $medium: {
        maxWidth: '80%',
      },
    },
    backdrop: {
      zIndex: 100000,
      ...helpers.abs,
      position: 'fixed',
      backgroundColor: 'rgba(1,1,1,0.2)',
    },
  },
}

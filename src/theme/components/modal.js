import { modal as defaults } from '../defaults.json'
import { flex } from '../flex'

export const modal = {
  default: {
    wrapper: {
      ...flex.center,
      position: 'fixed',
      top: '0',
      left: 0,
      right: 0,
      bottom: 0,
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
        backgroundColor: '#fff',
      },
      $medium: {
        maxWidth: '80%',
      },
    },
    backdrop: {
      zIndex: 100000,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(1,1,1,0.2)',
    },
  },
}

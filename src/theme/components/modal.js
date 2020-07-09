import { modal as defaults } from '../defaults.json'

export const modal = {
  default: {
    main: {
      $xsmall: {
        zIndex: 100010,
        position: 'fixed',
        top: '50%',
        right: '50%',
        left: 'auto',
        transform: 'translate(50%, -50%)',
        boxSizing: 'border-box',
        width: defaults.width,
        maxWidth: '90%',
        maxHeight: '600px',
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

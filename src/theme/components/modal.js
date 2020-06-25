import { modal as defaults } from '../defaults.json'

export const modal = {
  default: {
    main: {
      $native: {
        top: 0,
        right: 0,
        width: '100%',
        paddingTop: '30px',
      },
      $web: {
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)',
        width: defaults.width,
        maxWidth: '80%',
        height: '400px',
        maxHeight: '600px',
      },
      $all: {
        zIndex: 100010,
        position: 'fixed',
        padding: '15px',
        borderRadius: 4,
        backgroundColor: '#fff',
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

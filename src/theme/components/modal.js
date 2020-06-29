import { modal as defaults } from '../defaults.json'

export const modal = {
  default: {
    main: {
      zIndex: 100010,
      position: 'fixed',
      top: '50%',
      right: '50%',
      left: 'auto',
      transform: 'translate(50%, -50%)',
      boxSizing: 'border-box',
      width: defaults.width,
      maxWidth: '80%',
      maxHeight: '600px',
      padding: '15px',
      borderRadius: 4,
      backgroundColor: '#fff',
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

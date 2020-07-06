import { get } from 'jsutils'
import defaults from '../defaults.json'
import { flex } from '../flex'
import { border } from '../border'
import { padding } from '../padding'
import { colors } from '../colors'

const barHeight = get(defaults, 'tabbar.bar.height', 50)
const defBorderColor = get(colors, 'surface.default.colors.main')
const primaryColor = get(colors, 'surface.primary.colors.main')

export const tabbar = {
  default: {
    main: {
      flex: 1,
      flexGrow: flex.grow(1),
    },
    fixed: {
      bar: {
        position: 'fixed',
        right: 0,
        left: 0,
      },
      top: {
        top: 0,
      },
      bottom: {
        bottom: 0,
      },
    },
    container: {},
    scroll: {},
    tabview: {
      flex: 1,
      ...flex.row,
      ...padding.all,
      paddingTop: padding.size * 2,
    },
    bar: {
      ...flex.row,
      ...border(`1px solid ${defBorderColor}`, [ 'top', 'left' ]),
      minHeight: barHeight,
    },
    tab: {
      default: {
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: '15px',
          ...border(`2px solid ${defBorderColor}`, ['right']),
        },
        text: {
          textAlign: 'center',
          fontSize: '12px',
        },
        icon: {
          default: {
            container: {
              marginBottom: '5px',
            },
          },
          before: {},
          after: {},
        },
      },
      active: {
        text: {
          color: primaryColor,
        },
        icon: {
          default: {
            container: {},
            icon: {
              color: primaryColor,
            },
          },
          before: {},
          after: {},
        },
      },
    },
  },
}

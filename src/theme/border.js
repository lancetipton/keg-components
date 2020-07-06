import defaults from './defaults.json'
import { get, isStr, capitalize, isNum, isEmpty, deepMerge } from 'jsutils'

const borderStyles = get(defaults, 'border.styles')
const defaultBorderStyle = get(defaults, 'border.style')
const defaultBorderWidth = get(defaults, 'border.width')
const defaultBorderColor = get(defaults, 'border.color')

const buildBorderRule = (value, type, sides = []) => {
  return !isEmpty(value) && sides.length
    ? sides.reduce((borderSides, side) => {
        borderSides[`border${capitalize(side)}${type}`] = value

        return borderSides
      }, {})
    : {}
}

const isHexString = value => {
  ;/^#([0-9A-F]{3}){1,2}$/i.test(value)
}

const isColor = strColor => {
  const style = new Option().style
  style.color = strColor
  return style.color && style.color !== ''
}

const defaultBorder = sides => {
  return {
    ...buildBorderRule(defaultBorderWidth, 'Width', sides),
    ...buildBorderRule(defaultBorderColor, 'Color', sides),
    borderStyle: defaultBorderStyle,
  }
}

const getBorderRules = (value, sides) => {
  // Check if it's a color value by checking if it's a hex number or a browser color
  return isHexString(value) || isColor(value)
    ? buildBorderRule(value, 'Color', sides)
    : // Check if it's a line style value by checking if it's a valid border style
    borderStyles[value]
      ? { borderStyle: value }
      : // Check if it's a width value by checking if it can be parsed into a float
      isNum(parseFloat(value))
        ? buildBorderRule(value, 'Width', sides)
        : 'duper'
}

const parseValues = (toParse, sides) => {
  return toParse.split(' ').reduce((border, value) => {
    const borderRules = getBorderRules(value, sides)

    return borderRules ? { ...border, ...borderRules } : border
  }, {})
}

export const border = (toParse, sides = [ 'top', 'bottom', 'right', 'left' ]) => {
  const defBorder = defaultBorder(sides)

  return !isStr(toParse) || toParse === ''
    ? defBorder
    : deepMerge(defBorder, parseValues(toParse, sides))
}

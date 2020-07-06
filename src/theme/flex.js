// -------- Flex styles -------- //
const flex = () => ({ flex: 1 })
Object.assign(flex, {
  align: dir => ({ alignItems: dir }),
  direction: dir => ({ flexDirection: dir }),
  justify: dir => ({ justifyContent: dir }),
  grow: amount => ({ flexGrow: amount }),
  shrink: amount => ({ flexShrink: amount }),
  display: { display: 'flex' },
  wrap: { flexWrap: 'wrap' },
  center: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  right: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  direction: {
    row: { flexDirection: 'row' },
    column: { flexDirection: 'column' },
  },
  justify: {
    start: { justifyContent: 'flex-start' },
    end: { justifyContent: 'flex-end' },
    center: { justifyContent: 'center' },
    between: { justifyContent: 'space-between' },
    around: { justifyContent: 'space-around' },
    even: { justifyContent: 'space-evenly' },
  },
  align: {
    start: { alignItems: 'flex-start' },
    end: { alignItems: 'flex-end' },
    center: { alignItems: 'center' },
    stretch: { alignItems: 'stretch' },
    base: { alignItems: 'baseline' },
  },
})

flex.row = flex.direction.row
flex.column = flex.direction.column

export { flex }

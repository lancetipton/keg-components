import React, { useCallback, useState } from 'react'
import { Tabs } from './tabs'
import { TabViews } from './tabviews'
import { checkCall, isColl } from 'jsutils'
import { useThemePath } from '../../hooks'
import { useTheme } from '@simpleviewinc/re-theme'
import { View } from 'react-native'
import { isValidComponent } from '../../utils'
import PropTypes from 'prop-types'

/**
 * ActiveScreen
 * @summary gets the active screen based on the current active tab
 *
 * @param {*} props
 * @property {String} props.tab - Current active tab object
 * @property {Object} props.styles - Styles for the ActiveScreen
 *
 * @returns {React Component} - Tabbar Component
 */
const ActiveScreen = ({ tab, styles }) => {
  const Screen = tab && (tab.Screen || tab.screen)
  return isValidComponent(Screen) ? (
    <Screen
      data-class={'tabbar-screen'}
      {...tab}
      styles={styles}
    />
  ) : null
}

/**
 * Tabbar
 * @summary Renders a list of taps and correlating views
 * @param {Object} props - see Tabbar PropTypes
 *
 * @returns {React Component} - Tabbar Component
 */
export const Tabbar = props => {
  const {
    activeTab,
    location = 'bottom',
    fixed,
    onScroll,
    onTabSelect,
    scroll,
    styles,
    tabs,
    themePath,
    type = 'default',
  } = props

  const theme = useTheme()
  const [barStyles] = useThemePath(themePath || `tabbar.${type}`, styles)

  // Call onScroll event when the ActiveScreen is scrolled
  const scrollEvent = useCallback(
    event => {
      checkCall(onScroll, event)
    },
    [onScroll]
  )

  // Get the activeTab || The first key in the tabs object ( index )
  const asActiveTab = activeTab || (isColl(tabs) && Object.keys(tabs)[0])
  // Save it to the state
  const [ activeIndex, setActiveIndex ] = useState(asActiveTab)
  // Get the activeTab object from the stored state activeTab index
  const active = tabs[activeIndex]

  // Setup the onTabSelect event to update the tab to the selected tab index
  // Call the onTabSelect function prop and capture it's response
  // If it returns true, bypass updating the ActiveIndex on the state
  const tabSelectEvent = useCallback(
    index => {
      if (!tabs) return

      // Call the event hook, and if it returns true, then skip the state update
      const skip = checkCall(onTabSelect, index, tabs)

      // If nothing is returned, then update the tab index
      !skip && setActiveIndex(index.toString())
    },
    [tabs]
  )

  // The tabs can be above or below the Tab Views,
  // To do this we create and array
  // Then based on the location prop, add the Tab components in the correct order
  const TabComponents = []
  const addMethod = location === 'bottom' ? 'unshift' : 'push'

  // Only add the tab items if tabs exist
  tabs &&
    TabComponents.push(
      <View
        key={'tabbar'}
        data-class={'tabbar-bar'}
        style={theme.join(
          barStyles.bar,
          fixed && { ...barStyles.fixed.bar, ...barStyles.fixed[location] }
        )}
      >
        { tabs && (
          <Tabs
            tabs={tabs}
            activeIndex={activeIndex}
            styles={barStyles.tab}
            onTabSelect={tabSelectEvent}
          />
        ) }
      </View>
    )

  tabs &&
    TabComponents[addMethod](
      <TabViews
        key={'tabview'}
        scroll={scroll}
        onScroll={scrollEvent}
        styles={barStyles}
      >
        <ActiveScreen
          tab={active}
          styles={barStyles}
        />
      </TabViews>
    )

  return (
    <View
      style={barStyles.main}
      data-class={'tabbar-root'}
    >
      { TabComponents }
    </View>
  )
}

Tabbar.propTypes = {
  themePath: PropTypes.string,
  styles: PropTypes.object,
}

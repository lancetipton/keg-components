import { Tab } from './tab'
import React, { useMemo } from 'react'
import { mapColl } from 'jsutils'

export const Tabs = ({ activeIndex, tabs, styles, onTabSelect }) => {
  return useMemo(() => {
    return mapColl(tabs, (index, tab) => {
      const { Component, component, id, key, ...tabProps } = tab
      const keyId = key || id || index

      return (
        <Tab
          key={keyId}
          id={keyId}
          {...tabProps}
          styles={styles}
          onTabSelect={onTabSelect}
          active={activeIndex === index}
        >
          { Component || component }
        </Tab>
      )
    })
  }, [ activeIndex, tabs, styles ])
}

import React from 'react'
import { View, ScrollView } from 'react-native'

// Styles => container => scroll => tabview
export const TabViews = ({ children, onScroll, scroll, styles }) => {
  return (
    <ScrollView
      scrollEventThrottle={(scroll && scroll.throttle) || 16}
      {...scroll}
      data-class={'tabbar-scrollview'}
      contentContainerStyle={styles.container}
      style={styles.scroll}
      onScroll={onScroll}
    >
      <View
        data-class={'tabbar-view'}
        style={styles.tabview}
      >
        { children }
      </View>
    </ScrollView>
  )
}

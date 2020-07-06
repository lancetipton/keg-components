/* eslint-disable */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tabbar } from './'
import { View, Text } from '../'
import { action } from '@storybook/addon-actions'
import { StoryWrap } from 'StoryWrap'

const buttonStyle = { width: 125, marginRight: 10, margin: 'auto' }

const TabScreen = props => {
  return (
    <View>
      <Text>{props.title || 'I am a vew'}</Text>
    </View>
  )
}

const tabs = [
  {
    title: 'Containers',
    id: 0,
    screen: TabScreen,
    icon: { name: 'cube', size: '25px' },
  },
  {
    title: 'Images',
    id: 1,
    screen: TabScreen,
    icon: { name: 'picture-o', size: '25px' },
  },
  {
    title: 'Syncs',
    id: 2,
    screen: TabScreen,
    icon: { name: 'refresh', size: '25px' },
  },
]

storiesOf('Display | Tabbar', module).add('Standard', () => (
  <StoryWrap style={{ textAlign: 'center' }}>
    <Tabbar tabs={tabs} />
  </StoryWrap>
))

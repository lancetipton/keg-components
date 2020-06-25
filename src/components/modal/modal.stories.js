import React from 'react'
import { storiesOf } from '@storybook/react'
import { Section, H6, Divider, P } from '../../'
import { Modal } from './modal'
import { StoryWrap } from 'StoryWrap'

const storyStyles = { textAlign: 'center' }

storiesOf('Display | Modal', module).add('Plain', () => (
  <StoryWrap style={storyStyles}>
    <Section>
      <H6>This is a Section!</H6>
      <Divider />
      <P style={{ paddingTop: 30 }}>
        This is some text content that is displayed inside of the section.
      </P>
    </Section>
    <Section>
      <H6>This is a Section!</H6>
      <Divider />
      <P style={{ paddingTop: 30 }}>
        This is some text content that is displayed inside of the section.
      </P>
    </Section>
    <Section>
      <H6>This is a Section!</H6>
      <Divider />
      <P style={{ paddingTop: 30 }}>
        This is some text content that is displayed inside of the section.
      </P>
    </Section>
    <Section>
      <H6>This is a Section!</H6>
      <Divider />
      <P style={{ paddingTop: 30 }}>
        This is some text content that is displayed inside of the section.
      </P>
    </Section>
    <Modal visible={true}>
      <P>
        Body of the default Modal. This is just some demo text as an example.
      </P>
    </Modal>
  </StoryWrap>
))

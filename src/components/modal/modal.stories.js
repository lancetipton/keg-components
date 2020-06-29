import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Section, H6, Divider, P } from '../../'
import { Modal } from './modal'

import { StoryWrap } from 'StoryWrap'
import { action } from '@storybook/addon-actions'

const storyStyles = { textAlign: 'center' }
const buttonStyle = { width: 125, marginRight: 10 }
const modalOverrideStyle = {
  backgroundColor: 'yellow',
  width: '400px',
  maxHeight: '400px',
}

storiesOf('Display | Modal', module)
  .add('Standard', () => (
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
      <Modal
        visible={true}
        onBackdropTouch={action('Touched outside of modal')}
      >
        <P>
          Body of the default Modal. This is just some demo text as an example.
        </P>
        <Button
          themePath='button.contained.primary'
          styles={{ main: buttonStyle }}
          onClick={action('Button Clicked!')}
          content={'Primary'}
        />
      </Modal>
    </StoryWrap>
  ))
  .add('Style Override', () => (
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
      <Modal
        styles={{ main: modalOverrideStyle }}
        visible={true}
        onBackdropTouch={action('Touched outside of modal')}
      >
        <P>
          Body of the default Modal. This is just some demo text as an example.
        </P>
        <Button
          themePath='button.contained.primary'
          styles={{ main: buttonStyle }}
          onClick={action('Button Clicked!')}
          content={'Primary'}
        />
      </Modal>
    </StoryWrap>
  ))

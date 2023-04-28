import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Box component</Text>
      </>
    ),
  },
  argTypes: {
    children: {},
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

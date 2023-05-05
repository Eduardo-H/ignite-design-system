import * as RadixTooltip from '@radix-ui/react-tooltip'

import type { Meta, StoryObj } from '@storybook/react'

import { Button, Tooltip, TooltipProps } from '@xunito-ui/react'

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    text: 'Example text',
  },
  decorators: [
    (Story) => {
      return (
        <RadixTooltip.Provider delayDuration={300}>
          <RadixTooltip.Root>
            <RadixTooltip.Trigger asChild>
              <Button>Hover me</Button>
            </RadixTooltip.Trigger>

            <RadixTooltip.Portal>{Story()}</RadixTooltip.Portal>
          </RadixTooltip.Root>
        </RadixTooltip.Provider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

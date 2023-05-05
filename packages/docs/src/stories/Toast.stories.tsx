import * as RadixToast from '@radix-ui/react-toast'

import type { Meta, StoryObj } from '@storybook/react'

import { Toast, ToastProps } from '@xunito-ui/react'

export default {
  title: 'Toast',
  component: Toast,
  args: {
    title: 'Example title',
    open: true,
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => {
      return <RadixToast.Provider>{Story()}</RadixToast.Provider>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    description: 'July 2nd at 9:45 AM',
  },
}

export const WithoutDescription: StoryObj<ToastProps> = {
  args: {
    title: 'Example title',
    open: true,
  },
}

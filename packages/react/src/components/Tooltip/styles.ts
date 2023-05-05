import * as Tooltip from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$xs',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$gray100',
  lineHeight: '$short',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

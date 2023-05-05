import { TooltipArrow, TooltipContainer } from './styles'

export interface TooltipProps {
  text: string
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <TooltipContainer>
      {text}
      <TooltipArrow />
    </TooltipContainer>
  )
}

import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  width: '$80',
  padding: '$3 $5',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$1',

  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  position: 'relative',
})

export const ToastClose = styled(Toast.Action, {
  position: 'absolute',
  top: '$4',
  right: '$4',
})

export const ToastCloseButton = styled('button', {
  all: 'unset',
  width: '$5',
  height: '$5',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$white',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
})

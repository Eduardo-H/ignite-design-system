import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastCloseButton,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps {
  title: string
  description?: string
  open: boolean
}

export function Toast({ title, description, open }: ToastProps) {
  return (
    <>
      <ToastContainer open={open}>
        <ToastClose asChild altText="Close toast">
          <ToastCloseButton aria-label="Close toast">
            <X size={20} />
          </ToastCloseButton>
        </ToastClose>

        <ToastTitle>{title}</ToastTitle>

        {description && <ToastDescription>{description}</ToastDescription>}
      </ToastContainer>

      <ToastViewport />
    </>
  )
}

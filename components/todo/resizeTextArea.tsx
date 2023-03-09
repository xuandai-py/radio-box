import { Textarea, TextareaProps } from "@chakra-ui/react"
import React from 'react'
import ResizeTextArea from 'react-textarea-autosize'

export const AutoResizeTextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    return <Textarea as={ResizeTextArea} minH='unset' ref={ref} {...props}/>
})
import { Textarea, TextareaProps } from '@chakra-ui/react';
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

// eslint-disable-next-line react/display-name
export const AutoResizeTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {

  const scrollStyle = {
    backgroundColor: 'green'
  }
  return <Textarea
    as={TextareaAutosize}
    minH="unset"
    ref={ref}
    {...props}
  />;
});
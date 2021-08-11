import React from 'react';
import { Stack } from '@chakra-ui/react';

export default function StackAtom(props) {
  const { children } = props;

  return (
    <Stack {...props}>
      {children}
    </Stack>
  );
}

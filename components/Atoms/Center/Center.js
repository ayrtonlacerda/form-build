import React from 'react';
import { Center } from '@chakra-ui/react';

export default function CenterAtom(props) {
  const { children } = props;

  return (
    <Center {...props}>{children}</Center>
  );
}

import React from 'react';
import { Text } from '@chakra-ui/react';

export default function TextAtom(props) {
  const { children } = props;

  return <Text {...props}>{children}</Text>;
}

import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function FlexAtom(props) {
  const { children } = props;

  return (
    <Flex {...props}>{children}</Flex>
  );
}

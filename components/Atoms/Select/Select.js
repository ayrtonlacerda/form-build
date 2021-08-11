import React from 'react';
import { Select } from '@chakra-ui/react';

export default function SelectAtom(props) {
  const { children } = props;

  return (
    <Select {...props}>{children}</Select>
  );
}

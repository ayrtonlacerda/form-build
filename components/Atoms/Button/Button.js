import React from 'react';
import { Button } from '@chakra-ui/react';

function ButtonAtom(props) {
  const { children } = props;

  return <Button {...props}>{children}</Button>;
}

export default ButtonAtom;

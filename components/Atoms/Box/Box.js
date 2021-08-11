import React, { forwardRef } from 'react';
import { Box } from '@chakra-ui/react';

const BoxAtom = forwardRef((props, ref) => {
  const { children } = props;

  return <Box {...props} ref={ref}>{children}</Box>;
});

export default BoxAtom;

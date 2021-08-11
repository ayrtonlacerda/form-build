import React from 'react';

import * as Atoms from '../../Atoms';

export default function Alert({
  title, styleAlertContainer, styleText,
}) {
  return (
    <Atoms.Flex {...styleAlertContainer}>
      <Atoms.Text
        {...styleText}
        color="#004085"
        bg="#cce5ff"
        bc="#b8daff"
        border="1px"
        borderColor="#b8daff"
        position="relative"
        padding=".75rem 1.25rem"
        marginBottom="1rem"
        boxSizing="border-box"
        width="100%"
        fontSize="17px"
        borderRadius="0.25rem"
      >
        {title}
      </Atoms.Text>
    </Atoms.Flex>
  );
}

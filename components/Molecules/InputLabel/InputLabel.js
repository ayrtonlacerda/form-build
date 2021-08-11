import React from 'react';

import * as Atoms from '../../Atoms';

export default function InputLabel({
  label, placeholder, styleInputContainer, styleLabel, styleInput,
}) {
  return (
    <Atoms.Flex flexDirection="column" flex="1" {...styleInputContainer}>
      <Atoms.Text {...styleLabel}>{label}</Atoms.Text>
      <Atoms.Input borderColor="gray.400" placeholder={placeholder} {...styleInput} />
    </Atoms.Flex>
  );
}

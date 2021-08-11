import React from 'react';

import * as Atoms from '../../Atoms';

export default function SelectLabel({
  label, placeholder, styleSelectContainer, styleLabel, styleSelect,
}) {
  return (
    <Atoms.Flex flexDirection="column" flex="1" {...styleSelectContainer}>
      <Atoms.Text {...styleLabel}>{label}</Atoms.Text>
      <Atoms.Select borderColor="gray.400" placeholder={placeholder} {...styleSelect} />
    </Atoms.Flex>
  );
}

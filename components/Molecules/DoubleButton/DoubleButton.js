import React from 'react';

import * as Atoms from '../../Atoms';

export default function DoubleButton({
  firstBtnLabel,
  secondBtnLabel,
  firstBtnStyle,
  secondBtnStyle,
  styleContainer,
  firstBtnProps,
  secondBtnProps,
}) {
  const styleContainerNotExists = !styleContainer;

  return (
    <Atoms.Wrap
      styleWrapContainer={styleContainerNotExists ? {
        direction: 'row',
      } : styleContainer}
      listChildren={[
        <Atoms.Button
          colorScheme="green"
          {...firstBtnProps}
          {...firstBtnStyle}
        >
          {firstBtnLabel}
        </Atoms.Button>,
        <Atoms.Button
          colorScheme="blue"
          {...secondBtnProps}
          {...secondBtnStyle}
        >
          {secondBtnLabel}
        </Atoms.Button>,
      ]}
      styleWrapItem={{
        w: 'auto',
      }}
    />
  );
}

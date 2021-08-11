import React from 'react';

import { Atoms, Molecules } from '../..';

export default function StepCard() {
  return (
    <Atoms.Wrap
      styleWrapContainer={{
        p: '10px',
        bg: '#d9e9fb',
        borderRadius: '5px',
      }}
      listChildren={[
        <Molecules.InputLabel
          label="Step name"
          styleInput={{
            bg: 'white',
          }}
        />,
        <Molecules.InputLabel
          label="Info step"
          styleInput={{
            bg: 'white',
          }}
        />,
      ]}
    />
  );
}

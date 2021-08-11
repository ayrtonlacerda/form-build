import React, { useCallback } from 'react';

import * as Molecules from '../../Molecules';
import * as Atoms from '../../Atoms';

import { useStore } from '../../../hooks/useStore';

export default function Section() {
  const steps = useStore(useCallback((state) => state.steps, []));

  return (
    <Atoms.Flex
      width="100%"
      borderColor="gray.300"
      borderWidth="1px"
      flexDirection="column"
      borderRadius="5px"
    >
      <Molecules.Alert
        title="Arraste o componente abaixo para o Step desejado. É necessário adicionar pelo menos um STEP."
      />
      <Molecules.InputLabel
        label="Numero de passos"
        styleInputContainer={{ padding: '1.25rem' }}
        styleInput={{
          isDisabled: true,
          backgroundColor: 'gray.300',
          width: ['100%', '100%', '16.666667%'],
          _placeholder: { color: 'black', fontWeight: 'bold' },
        }}
        styleLabel={{ fontSize: '1.25rem', marginBottom: '.5rem' }}
        placeholder={steps.length}
      />
      <Atoms.Flex
        wrap="wrap"
        flexDirection="row"
        flex="1 1 auto"
        padding="1.25rem"
        margin="2px"
        justifyContent="center"
      >
        <Molecules.InputLabel
          label="Form name"
          styleInputContainer={{ flex: '1 1 310px', margin: '0 15px 25px 0px' }}
          styleLabel={{ marginBottom: '.5rem' }}
          styleInput={{ marginBottom: '.5rem' }}
        />
        <Molecules.InputLabel
          label="Titulo do formulário"
          styleInputContainer={{ flex: '1 1 310px', margin: '0 15px 25px 0px' }}
          styleLabel={{ marginBottom: '.5rem' }}
          styleInput={{ marginBottom: '.5rem' }}
        />
        <Molecules.InputLabel
          label="Descrição formulário"
          styleInputContainer={{ flex: '1 1 310px', margin: '0 15px 25px 0px' }}
          styleLabel={{ marginBottom: '.5rem' }}
          styleInput={{ marginBottom: '.5rem' }}
        />
      </Atoms.Flex>
    </Atoms.Flex>
  );
}

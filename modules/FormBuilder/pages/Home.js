/* eslint-disable react/no-array-index-key */
import { useCallback, useState, useMemo } from 'react';
import { StackDivider } from '@chakra-ui/react';

import { Molecules, Atoms, Organisms } from '../../../components';
import { useStore } from '../../../hooks/useStore';

export default function Home() {
  const increaseSteps = useStore(useCallback((state) => state.increaseSteps, []));
  const setListModified = useStore(useCallback((state) => state.setListModified, []));
  const steps = useStore(useCallback((state) => state.steps, []));

  const [index, setIndex] = useState(0);

  const renderSteps = useMemo(() => steps.map((step) => (
    <Atoms.Stack key={index}>
      <Molecules.StepCard />
      <Molecules.Card
        title="Componente"
        index={step.index}
        stepList={steps}
        setListModified={setListModified}
        showContent={step.showContent}
        listChildren={[
          <Molecules.SelectLabel
            label="Tipo"
            styleLabel={{
              fontSize: ['1rem', '1.1rem'],
            }}
          />,
          <Molecules.SelectLabel
            label="Tipo"
            styleLabel={{
              fontSize: ['1rem', '1.1rem'],
            }}
          />,
          <Molecules.SelectLabel
            label="Tipo"
            styleLabel={{
              fontSize: ['1rem', '1.1rem'],
            }}
          />,
          <Molecules.SelectLabel
            label="Tipo"
            styleLabel={{
              fontSize: ['1rem', '1.1rem'],
            }}
          />,
        ]}
      />
    </Atoms.Stack>
  )), [index, setListModified, steps]);

  return (
    <Atoms.Box
      bg="blue.50"
      minHeight="100vh"
      justifyContent="center"
      display="flex"
    >
      <Atoms.Stack
        w={['90%', null, null, '1110px']}
        h="max-content"
        bg="white"
        m="4vh 4vw 4vh 4vw"
        boxShadow="inset 0 0 1em white, 0 0 1em rgb(55 65 30 / 20%)"
        borderRadius="10px"
        p="10px"
        spacing="20px"
        alignItems="center"
      >
        <Organisms.Section />
        <Atoms.Stack
          w="75%"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Molecules.Card
            title="Componente"
            showContent
            listChildren={[
              <Molecules.SelectLabel
                label="Tipo"
                styleLabel={{
                  fontSize: ['1rem', '1.1rem'],
                }}
              />,
              <Molecules.SelectLabel
                label="Tipo"
                styleLabel={{
                  fontSize: ['1rem', '1.1rem'],
                }}
              />,
              <Molecules.SelectLabel
                label="Tipo"
                styleLabel={{
                  fontSize: ['1rem', '1.1rem'],
                }}
              />,
              <Molecules.SelectLabel
                label="Tipo"
                styleLabel={{
                  fontSize: ['1rem', '1.1rem'],
                }}
              />,
            ]}
          />
          {renderSteps}
        </Atoms.Stack>
        <Atoms.Stack
          w="75%"
          m="auto"
          spacing="10px"
        >
          <Atoms.Text fontSize={['1rem', '1.1rem']}>Monte aqui seu formulário:</Atoms.Text>
          <Molecules.DoubleButton
            firstBtnLabel="Adicionar novo step"
            secondBtnLabel="Enviar formulário"
            firstBtnStyle={{
              colorScheme: 'green',
              fontSize: '1rem',
              width: ['170px', 'auto'],
            }}
            firstBtnProps={{
              onClick: () => {
                increaseSteps(
                  {
                    index,
                    showContent: false,
                  },
                );
                setIndex((prev) => prev + 1);
              },
            }}
            secondBtnStyle={{
              colorScheme: 'blue',
              fontSize: '1rem',
              width: ['170px', 'auto'],
            }}
          />
        </Atoms.Stack>
      </Atoms.Stack>
    </Atoms.Box>
  );
}

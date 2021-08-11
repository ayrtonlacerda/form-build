/* eslint-disable no-unused-vars */
import React, { useRef, memo, useState } from 'react';
import { useDrag, useDrop, DropTarget } from 'react-dnd';

import * as Atoms from '../../Atoms';

// As fontes de arrastar e soltar somente interagem
// se tiverem o mesmo tipo de string.
const Types = {
  CARD: 'CARD',
};

/**
 * Especifica quais adereços injetar nas props do seu componente.
 */
function collect(connect, monitor) {
  return {
    isOver: monitor.isOver(),
    connectDropTarget: connect.dropTarget(),
  };
}

// Especifica o contrato de destino final.
const spec = {
  drop(props) {
    if (!props.index && props.index !== 0) return;
    const stepsListClone = props.stepList;
    stepsListClone.splice(
      props.index,
      1,
      {
        index: props.index,
        showContent: true,
      },
    );
    props.setListModified(stepsListClone);
  },
};

const Card = memo(({
  title,
  listChildren = [],
  styleMainContainer,
  styleContentContainer,
  styleTitle,
  styleChildrenContainer,
  index,
  showContent,
  stepList,
  setListModified,
  connectDropTarget, // Prop injetada pelo React DnD, ela foi definida pela função 'collect' ácima
  isOver, // Prop injetada pelo React DnD, ela foi definida pela função 'collect' ácima
}) => {
  const ref = useRef();

  const [isDropped, setIsDropped] = useState(false);

  const [, dragRef] = useDrag({
    type: 'CARD',
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop: () => {
      setIsDropped(true);
    },
  }, [index]);

  const draggableCardHeight = ref.current ? ref.current.offsetHeight : null;

  const childrenExists = listChildren.length > 0;

  dragRef(dropRef(ref));

  const renderChildren = () => listChildren.map((child) => (
    <Atoms.Flex key={index} w="100%" {...styleChildrenContainer}>
      {child}
    </Atoms.Flex>
  ));

  return connectDropTarget(
    <div ref={ref}>
      <Atoms.Box
        borderWidth="10px"
        borderColor="blue.100"
        borderRadius="5px"
        p="10px"
        w="100%"
        m="auto"
        h={isOver && draggableCardHeight}
        cursor="grab"
        {...styleMainContainer}
      >
        {showContent && childrenExists
          ? (
            <Atoms.Box
              bg="gray.100"
              p="10px"
              {...styleContentContainer}
            >
              <Atoms.Text
                fontSize={['1rem', '1.1rem']}
                fontWeight="bold"
                {...styleTitle}
              >
                {title}
              </Atoms.Text>
              <Atoms.Wrap
                listChildren={renderChildren()}
                w="100%"
              />
            </Atoms.Box>
          )
          : isDropped ? (
            <Atoms.Box
              bg="gray.100"
              p="10px"
              {...styleContentContainer}
            >
              <Atoms.Text
                fontSize={['1rem', '1.1rem']}
                fontWeight="bold"
                {...styleTitle}
              >
                {title}
              </Atoms.Text>
              <Atoms.Wrap
                listChildren={renderChildren()}
                w="100%"
              />
            </Atoms.Box>
          ) : null}
      </Atoms.Box>
    </div>,
  );
});

export default DropTarget(
  Types.CARD,
  spec,
  collect,
)(Card);

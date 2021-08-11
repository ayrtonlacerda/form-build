/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

export default function WrapAtom({ listChildren = [], styleWrapItem, styleWrapContainer }) {
  const renderChildren = () => listChildren.map((child, index) => (
    <WrapItem key={index} w={['100%', '100%', '100%', '48%']} {...styleWrapItem}>
      {child}
    </WrapItem>
  ));

  return (
    <Wrap {...styleWrapContainer}>
      {renderChildren()}
    </Wrap>
  );
}

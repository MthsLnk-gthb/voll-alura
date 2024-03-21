
import { Text } from 'native-base';
import React from 'react'

interface TituloProps{
    titulo: string
}

export function Titulo({titulo}: TituloProps) {
  return (
    <Text fontSize="2xl" fontWeight="bold" color="gray.500" marginTop="5"alignSelf="center">
      {titulo}
    </Text>
  );
}
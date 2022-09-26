import React from 'react';
import { ButtonContainter } from './styles';

function Button(onClick) {
  return (
    <ButtonContainter onClick={onClick}>
        Buscar
    </ButtonContainter>
  )
}

export default Button
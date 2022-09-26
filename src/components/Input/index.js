import React from 'react';
import { InputContainter } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainter>
        <input value={value} onChange={onChange}/>
    </InputContainter>
  )
}

export default Input
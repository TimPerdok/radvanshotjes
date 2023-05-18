import React from 'react';
import styled from 'styled-components';
import Block from './Block';
import LineAnimation from '../animations/LineAnimation';


export default function TitleBlock({ title, subtitle }) {
  return (
    <Block>
      <h1>
        {title}
      </h1>
      <h2>
        {subtitle}
      </h2>
    </Block>
  )
}

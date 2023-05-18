import * as THREE from 'three'
import React, { useState, useEffect, useReducer } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import styled, { useTheme } from 'styled-components';
import { Theme } from '../types/types';
import Globe from './animations/Globe';

const Container = styled.div`
  height: 1200px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export default function Footer() {
  return (
    <Container>
      <Globe></Globe>
    </Container>
  )
}
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import HorizontalNavigation from './HorizontalNavigation';


const Bar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
`

export default function Header({ }) {
  const links = [
    "",
    "about",
    "projects"
  ]
  return (
    <Bar>
      <HorizontalNavigation links={links}></HorizontalNavigation>
    </Bar>
  )
}

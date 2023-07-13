import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';


const Bar = styled.div`
  display:flex;
  flex-direction: row;
`
// NavigationItem
const NavigationItem = styled.div`
  padding: 16px;
`

export default function HorizontalNavigation({ links }) {
  return (
    <Bar>
      {
        Object.entries(links)?.map(([path, label]) => <NavigationItem key={path}><Link href={`/${path}`}>{label}</Link></NavigationItem>)
      }
    </Bar>
  )
}
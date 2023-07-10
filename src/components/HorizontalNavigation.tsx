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
        links?.map((link) => <NavigationItem key={link}><Link href={`/${link}`}>Link</Link></NavigationItem>)
      }
    </Bar>
  )
}
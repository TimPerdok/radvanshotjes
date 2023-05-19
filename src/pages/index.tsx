
import React from 'react';
import TitleBlock from '../components/blocks/TitleBlock';
import Highlight from '../components/Highlight';
import styled from 'styled-components';



const Description = styled.article`
  margin-top: 2rem;
  max-width: 400px
`


export default function Home() {
  return (
    <TitleBlock>
      <b>
        <Highlight>
          Hello world, my name is 
        </Highlight>
      </b>
      <h1>
        Tim Perdok
      </h1>
      <h3>
        Software engineer & frontend enthusiast
      </h3>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel beatae ullam at facilis commodi aut aliquam facere iusto? Rerum dolores sed voluptas doloremque hic autem, aspernatur illo pariatur molestiae culpa?
      </Description>
    </TitleBlock>
  )
}

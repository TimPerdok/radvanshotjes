
import React from 'react';
import TitleBlock from '../components/blocks/TitleBlock';
import Highlight from '../components/Highlight';
import styled from 'styled-components';
import Page from '../components/Page';



const Description = styled.article`
  margin-top: 2rem;
  max-width: 400px
`


export default function Home() {
  return (
    <Page>
      <TitleBlock>

        <h1>Hello world</h1>

        <div>
          <h2>
            My name is&nbsp;
          </h2>
          <Highlight>
            <h2>
              Tim Perdok
            </h2>
          </Highlight>
        </div>

        <div>
          <h4>
            Software engineer & frontend enthusiast
          </h4>
        </div>

        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel beatae ullam at facilis commodi aut aliquam facere iusto? Rerum dolores sed voluptas doloremque hic autem, aspernatur illo pariatur molestiae culpa?
        </Description>
      </TitleBlock>

    </Page>
  )
}

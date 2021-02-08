import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConcepts } from 'types/api'

const SectionConceptsComponent = ({ title, concepts }: SectionConcepts) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map((item) => (
          <S.Item key={item.id}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConceptsComponent

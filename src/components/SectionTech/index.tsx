import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionTech: SectionTechProps
}

const SectionTech = ({ sectionTech }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{sectionTech.title}</Heading>
      <S.IconsContainer>
        {sectionTech.techIcon.map(({ title, icon, id }) => (
          <S.Icon key={id}>
            <S.Icons src={getImageUrl(icon.url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech

import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  section: SectionProps
}

const SectionAboutProject = ({ section }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(section.image.url)}
          alt={section.image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{section.title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: section.description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject

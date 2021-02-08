export type ImageProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button?: {
    label: string
    url: string
  }
  image: ImageProps
}

export type SectionProps = {
  title: string
  description: string
  image: ImageProps
}

export type IconProps = {
  title: string
  id: string
  icon: {
    url: string
  }
}

export type SectionTechProps = {
  title: string
  id: string
  techIcon: IconProps[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  section: SectionProps
  sectionTech: SectionTechProps
}

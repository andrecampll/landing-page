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

export type SectionConcepts = {
  title: string
  concepts: Array<{
    id: string
    title: string
  }>
}

export type SectionModule = {
  title: string
  modules: Array<{
    id: string
    title: string
    subtitle: string
    description: string
  }>
}

export type SectionAgenda = {
  title: string
  description: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type PrincingBoxProps = {
  totalPrice: number
  installmentsNumber: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: Array<{
    id: string
    name: string
    photo: ImageProps
    role: string
    description: string
    socialLinks: Array<{
      slug: string
      link: string
    }>
  }>
}

export type SectionReviewsProps = {
  title: string
  reviews: Array<{
    id: string
    name: string
    text: string
    photo: ImageProps
  }>
}

export type SectionFAQProps = {
  title: string
  questions: Array<{
    id: string
    question: string
    answer: string
  }>
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  section: SectionProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConcepts
  sectionModule: SectionModule
  sectionAgenda: SectionAgenda
  pricingBox: PrincingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFAQ: SectionFAQProps
}

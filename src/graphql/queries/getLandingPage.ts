const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment section on LandingPage {
    section {
      title
      description
      image {
        url
        alternativeText
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      id
      techIcon {
        title
        id
        icon {
          url
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        id
        title
      }
    }
  }

  fragment sectionModule on LandingPage {
    sectionModule {
      title
      modules {
        id
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      installmentsNumber
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        id
        name
        photo {
          url
          alternativeText
        }
        role
        description
        socialLinks {
          slug
          link
        }
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        id
        name
        text
        photo {
          url
          alternativeText
        }
      }
    }
  }

  fragment sectionFAQ on LandingPage {
    sectionFAQ {
      title
      questions {
        id
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...section
      ...sectionTech
      ...sectionConcepts
      ...sectionModule
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFAQ
    }
  }
`

export default GET_LANDING_PAGE

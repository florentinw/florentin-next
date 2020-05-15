import { useEffect } from 'react'
import styled from 'styled-components'

import { Container, PortfolioItem } from '.'
import portfolioData from '../data/portfolio.js'

const MainWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Wrapper = styled.div`
  display: block;
  flex: 1;
  margin-top: -24px;
`

const PortfolioLayout = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.VanillaTilt = require('vanilla-tilt')
      window.VanillaTilt.init(document.querySelectorAll('.tilt'), {
        scale: 1.0175,
        max: 4,
        speed: 800
      })
    }
  })

  return (
    <MainWrapper>
      <Wrapper style={{ flex: 7 }}>
        {Object.keys(portfolioData).map((slug, index) => {
          if (!(index & 1)) {
            return (
              <PortfolioItem
                key={slug}
                name={portfolioData[slug].name}
                headline={portfolioData[slug].headline}
                skills={portfolioData[slug].skills}
                background={portfolioData[slug].background}
                addonImage={portfolioData[slug].addonImage}
                slug={slug}
                addonPosition='right'
              />
            )
          } else {
            return false
          }
        })}
      </Wrapper>
      <Wrapper style={{ flex: 5 }}>
        {Object.keys(portfolioData).map((slug, index, array) => {
          if (index & 1) {
            return (
              <PortfolioItem
                key={slug}
                name={portfolioData[slug].name}
                headline={portfolioData[slug].headline}
                skills={portfolioData[slug].skills}
                background={portfolioData[slug].background}
                addonImage={portfolioData[slug].addonImage}
                slug={slug}
                addonPosition='bottom'
              />
            )
          } else {
            return false
          }
        })}
      </Wrapper>
    </MainWrapper>
  )
}

export default PortfolioLayout

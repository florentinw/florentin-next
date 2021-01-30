import { useEffect } from 'react'
import styled from 'styled-components'

import { Container, PortfolioItem } from '.'
import portfolioData from '../data/portfolio'

const VanillaTilt = require('vanilla-tilt')

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
      VanillaTilt.init(document.querySelectorAll('a.apply-tilt'), {
        scale: 1.05,
        max: 3,
        speed: 1000,
        glare: false,
        'max-glare': 0.5,
      })
    }
  })

  return (
    <MainWrapper
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <Wrapper style={{ flex: 7 }}>
        {portfolioData.map(
          (p, i) =>
            !(i % 2) && (
              <PortfolioItem key={p.slug} {...p} addonPosition="right" />
            )
        )}
      </Wrapper>
      <Wrapper style={{ flex: 5 }}>
        {portfolioData.map(
          (p, i) =>
            i % 2 && <PortfolioItem key={p.slug} {...p} addonPosition="right" />
        )}
      </Wrapper>
    </MainWrapper>
  )
}

export default PortfolioLayout

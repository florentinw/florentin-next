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

const PortfolioLayout = () => (
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

export default PortfolioLayout

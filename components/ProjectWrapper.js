import Head from 'next/head'
import { Navbar, Header, GoBackHomeButton, PortfolioItemIntroduction } from '.'

import portfolioData from '../data/portfolio.js'

const ProjectWrapper = ({ children, slug }) => {
  const currentProject = portfolioData[slug]

  return (
    <>
      <Head>
        <title>{currentProject.name} | Florentin Walter</title>
        <meta key='Title' name='title' content={`${currentProject.name} | Florentin Walter`} />
        <meta
          key='Description'
          name='description' content={currentProject.summary}
        />
        <meta key='OpenGraphTitle' property='og:title' content={`${currentProject.name} | Florentin Walter`} />
        <meta
          key='OpenGraphDescription'
          property='og:description' content={currentProject.summary}
        />
        <meta key='OpenGraphCover' property='og:image' content={'https://florentin.design' + currentProject.seoImage} />
        <meta key='TwitterTitle' name='twitter:title' content={`${currentProject.name} | Florentin Walter`} />
        <meta
          key='TwitterDescription' name='twitter:description' content={currentProject.summary}
        />
        <meta key='TwitterCover' name='twitter:image' content={'https://florentin.design' + currentProject.seoImage} />
      </Head>
      <Navbar leftContent={<GoBackHomeButton>Back to my works</GoBackHomeButton>} />
      <Header content={currentProject.summary} />
      <PortfolioItemIntroduction client={currentProject.client} skills={currentProject.skills}>
        {currentProject.introduction}
      </PortfolioItemIntroduction>
      {children}
    </>
  )
}

export default ProjectWrapper

import Head from 'next/head'
import { Navbar, Header, GoBackHomeButton, PortfolioItemIntroduction, SEO } from '.'

import portfolioData from '../data/portfolio.js'

const ProjectWrapper = ({ children, slug }) => {
  const currentProject = portfolioData[slug]

  return (
    <>
      <Head>
        <SEO title={currentProject.name} description={currentProject.summary} image={currentProject.seoImage} slug={`project/${slug}`} />
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

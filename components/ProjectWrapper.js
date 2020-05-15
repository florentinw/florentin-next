import Head from 'next/head'
import { Navbar, Header, GoBackHomeButton, PortfolioItemIntroduction } from '.'

import portfolioData from '../data/portfolio.js'

const ProjectWrapper = ({ children, slug }) => {
  const currentProject = portfolioData[slug]

  return (
    <>
      <Head>
        <title>{currentProject.name} | Florentin</title>
      </Head>
      <Navbar leftContent={<GoBackHomeButton />} />
      <Header content={currentProject.summary} />
      <PortfolioItemIntroduction client={currentProject.client} skills={currentProject.skills}>
        {currentProject.introduction}
      </PortfolioItemIntroduction>
      {children}
    </>
  )
}

export default ProjectWrapper

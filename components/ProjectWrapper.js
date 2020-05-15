import Head from 'next/head'
import { Navbar, Header, GoBackHomeButton, PortfolioItemIntroduction } from '.'

import portfolioData from '../data/portfolio.js'

const ProjectWrapper = ({ children, slug }) => {
  const currentProject = portfolioData[slug]

  return (
    <>
      <Head>
        <title>{currentProject.name} — Florentin Walter</title>
        <meta name='title' content={`${currentProject.name} — Florentin Walter`} />
        <meta name='description' content={currentProject.summary} />
        <meta property='og:title' content={`${currentProject.name} — Florentin Walter`} />
        <meta property='og:description' content={currentProject.summary} />
        <meta property='og:image' content={'https://florentin.design' + currentProject.seoImage} />
        <meta property='og:url' content={`https://florentin.design/project/${slug}`} />
        <meta name='twitter:title' content={`${currentProject.name} — Florentin Walter`} />
        <meta name='twitter:description' content={currentProject.summary} />
        <meta name='twitter:image' content={'https://florentin.design' + currentProject.seoImage} />
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

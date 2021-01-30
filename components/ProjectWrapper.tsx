import { ReactChild } from 'react'
import {
  Navbar,
  Header,
  GoBackHomeButton,
  PortfolioItemIntroduction,
  MetaHead,
} from '.'

import portfolioData from '../data/portfolio'

const ProjectWrapper = ({
  children,
  slug,
}: {
  children: ReactChild | ReactChild[]
  slug: string
}) => {
  const currentProject = portfolioData.find((p) => p.slug === slug)

  return (
    <>
      {currentProject ? (
        <>
          <MetaHead
            title={currentProject.name}
            description={currentProject.summary}
            image={currentProject.seoImage}
            slug={`project/${slug}`}
          />
          <Navbar
            leftContent={<GoBackHomeButton>Back to my works</GoBackHomeButton>}
          />
          <Header content={currentProject.summary} />
          <PortfolioItemIntroduction
            client={currentProject.client}
            skills={currentProject.skills}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            {currentProject.introduction}
          </PortfolioItemIntroduction>
          {children}
        </>
      ) : (
        <h1>no</h1>
      )}
    </>
  )
}

export default ProjectWrapper

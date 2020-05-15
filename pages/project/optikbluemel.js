import { ProjectWrapper, ImageWithContainer, Section, SectionText, Image } from '../../components'

const OptikBluemelProject = () => (
  <ProjectWrapper slug='optikbluemel'>
    <Section>
      <ImageWithContainer
        src={require('../../assets/imgs/portfolio/optikbluemel/desktop.jpg')}
      />
      <SectionText
        label='The Website'
        title='Modern, simple &amp; clear'
        text='They reached out to impart a professional and modern look into their dated website. For an independent content editing experience I utilized WordPress together with a custom theme.'
      >
        <Image
          src={require('../../assets/imgs/portfolio/optikbluemel/iphone.jpg')}
        />
      </SectionText>
      <ImageWithContainer
        src={require('../../assets/imgs/portfolio/optikbluemel/screenshot.jpg')}
      />
    </Section>
  </ProjectWrapper>
)

export default OptikBluemelProject

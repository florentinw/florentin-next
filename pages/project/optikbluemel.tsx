import {
  ProjectWrapper,
  ImageWithContainer,
  Section,
  SectionText,
  Image,
} from '../../components'

const OptikBluemelProject = () => (
  <ProjectWrapper slug="optikbluemel">
    <Section>
      <ImageWithContainer
        src="/imgs/portfolio/optikbluemel/desktop.jpg"
        alt="Optik Bluemel Website on a Desktop device"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      />
      <SectionText
        label="The Website"
        title="Modern, simple &amp; clear"
        text="They reached out to impart a professional and modern look into their dated website. For an independent content editing experience I utilized WordPress together with a custom theme."
      >
        <Image
          src="/imgs/portfolio/optikbluemel/iphone.jpg"
          alt="Optik Bluemel Website on a Mobile device"
          height={360}
          width={640}
        />
      </SectionText>
      <ImageWithContainer
        src="/imgs/portfolio/optikbluemel/screenshot.jpg"
        alt="Full Optik Bluemel Website"
        height={200}
        width={300}
      />
    </Section>
  </ProjectWrapper>
)

export default OptikBluemelProject

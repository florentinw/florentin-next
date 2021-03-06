import {
  BodyText,
  Section,
  ImageWithContainer,
  Gallery,
  SectionText,
  CustomLink,
  ProjectWrapper,
} from '../../components'

const HowToMusicProject = () => (
  <ProjectWrapper slug="howtomusic">
    <Section>
      <ImageWithContainer
        src="/imgs/portfolio/howtomusic/real1.jpg"
        alt="Application of the poster campaign in Berlin"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      />
      <SectionText label="The Campaign" title="All throughout Berlin">
        <BodyText>
          In order to initially promote the show, a poster campaign was
          initiated. The posters were hung up all over Berlin, where the show
          also takes place.
        </BodyText>
        <BodyText>
          I was commissioned to design the individual posters featuring all
          protagonists based on images provided by a photo-shooting earlier.
        </BodyText>
      </SectionText>
      <Gallery
        images={[
          {
            src: '/imgs/portfolio/howtomusic/poster1.jpg',
            alt: 'Poster with musician Nashira',
            height: 480,
            width: 350,
          },
          {
            src: '/imgs/portfolio/howtomusic/poster2.jpg',
            alt: 'Poster with musician Danergy',
            height: 480,
            width: 350,
          },
          {
            src: '/imgs/portfolio/howtomusic/poster3.jpg',
            alt: 'Poster with musician NIC',
            height: 480,
            width: 350,
          },
        ]}
      />
      <Gallery
        images={[
          {
            src: '/imgs/portfolio/howtomusic/poster4.jpg',
            alt: 'Poster with musician NME',
            height: 480,
            width: 350,
          },
          {
            src: '/imgs/portfolio/howtomusic/poster5.jpg',
            alt: 'Poster with musician NIC DNCR',
            height: 480,
            width: 350,
          },
          {
            src: '/imgs/portfolio/howtomusic/poster6.jpg',
            alt: 'Poster with musician Arina',
            height: 480,
            width: 350,
          },
        ]}
      />
    </Section>
    <Section>
      <Gallery
        images={[
          {
            src: '/imgs/portfolio/howtomusic/real2.jpg',
            alt: 'Application of the poster campaign in Berlin',
            height: 900,
            width: 600,
            layout: 'fixed',
          },
          {
            src: '/imgs/portfolio/howtomusic/real3.jpg',
            alt: 'Application of the poster campaign in Berlin',
            height: 900,
            width: 600,
            layout: 'fixed',
          },
        ]}
      />
    </Section>
    <Section>
      <ImageWithContainer
        src="/imgs/portfolio/howtomusic/header.jpg"
        alt="YouTube channel design for HowToMusic"
      />
      <SectionText label="Channel Designs" title="Present on all channels">
        <BodyText>
          I designed the complete channel design from banner &amp; profile
          picture to thumbnail template for all platforms. Working with funk
          branding guidelines gives all channels of the content network a
          professional and unified look.
        </BodyText>
      </SectionText>
      <ImageWithContainer
        src="/imgs/portfolio/howtomusic/yt.jpg"
        alt="Consistent design between all channels: YouTube, Instagram and Twitter"
      />
      <Gallery
        images={[
          {
            src: '/imgs/portfolio/howtomusic/thumbnail.jpg',
            alt: 'Thumbnail template',
            height: 338,
            width: 600,
          },
          {
            src: '/imgs/portfolio/howtomusic/logo.jpg',
            alt: 'Logo design',
            height: 338,
            width: 600,
          },
        ]}
      />
    </Section>
    <Section>
      <ImageWithContainer
        src="/imgs/portfolio/howtomusic/talents-overview.jpg"
        alt="Social media designs for the individual musicians channels"
      />
      <SectionText label="The Talent Channels" title="More content for fans">
        <BodyText>
          On the individual protagonist's channels viewers have the chance to
          discover what's going on behind the scenes of How to Music and stay up
          to date with exciting vlogs week after week.
        </BodyText>
        <BodyText>
          Besides designing the main channel's look, I was also in charge of the
          individual channel designs.
        </BodyText>
      </SectionText>
      <ImageWithContainer
        src="/imgs/portfolio/howtomusic/talents-header.jpg"
        alt="Social media designs for the individual musicians channels"
      />
    </Section>
    <Section>
      <ImageWithContainer
        src="/imgs/portfolio/howtomusic/funk.jpg"
        alt="Logo of funk"
      />
      <SectionText label="About funk" title="funk is content network">
        <BodyText>
          funk unites the online formats from ARD and ZDF, the public service
          broadcasting in Germany, focused on reaching a younger target audience
          between the age of 14 - 29. Their content is natively designed for
          third-party platforms such as YouTube, Facebook, Instagram, Snapchat
          and TikTok as well as on their own web app{' '}
          <CustomLink isExternal href="http://funk.net/">
            funk.net
          </CustomLink>
          .
        </BodyText>
        <BodyText>
          The content network, originally launched in October 2016, is a public
          service and is therefore financed by the radio contribution, which
          enables the creators to create content that is free of advertising and
          independent of financial and political influences.
        </BodyText>
        <BodyText>
          funk publishes entertaining, informative, critical and hopefully
          captivating videos on over 70 different channels.
        </BodyText>
      </SectionText>
    </Section>
  </ProjectWrapper>
)

export default HowToMusicProject

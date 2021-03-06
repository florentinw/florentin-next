import {
  Header,
  SectionText,
  BodyText,
  GoBackHomeButton,
  Navbar,
  CustomLink,
  Gallery,
  MetaHead,
} from '../components'

const AboutPage = () => (
  <>
    <MetaHead
      title="About Me"
      description={
        "Hi there! I'm Florentin, a young designer from Germany, focused on creating beautiful products for humans."
      }
      image="/meta/about-card.jpg"
      slug="about"
    />
    <Navbar
      leftContent={<GoBackHomeButton>Back to my works</GoBackHomeButton>}
    />
    <Header
      content={
        "Hi there!\nI'm Florentin, a young designer from Germany focused on creating beautiful products for humans.\n\nWith a focus on user interface, web and print design, I strive to create usable and polished products through passionate and deliberate design."
      }
    />
    <SectionText
      label="My journey"
      title="I actually started out in Microsoft Word"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <BodyText>
        I've always had a passion for design and art. My journey started out
        quite early in Microsoft Word, as a young kid and with a lot of WordArt.
        This way I discovered my fascination for visuals and compositions in
        general.
      </BodyText>
      <BodyText>
        With the creation of my design-related YouTube channel at the age of 13
        and two years of continuous uploads, I found my way into the video game
        graphic design community. I also moved away from{' '}
        <CustomLink isExternal href="https://microsoft.com">
          PowerPoint
        </CustomLink>{' '}
        into the Photoshop world. Through my growing social media presence, I
        initially got my first few jobs mostly doing work for individuals in the
        social media world.
      </BodyText>
      <BodyText>
        Since then I’ve been expanding my skillset, began developing my
        knowledge, taught myself how to code and eventually started my own
        adventure. It was at that time I truly understood the value I'm able to
        provide.
      </BodyText>
    </SectionText>
    <SectionText label="Now" title="Fast forward">
      <BodyText>
        Fast forward a few years and I'm now working as a freelance user
        experience and interface designer with various clients from the highly
        diverse economic sectors and I have started my own business to pursue
        the dream.
      </BodyText>
      <BodyText>
        When I am not pushing pixels, and besides being a student, you may find
        me trying out the hottest new design tools, shooting some sick
        photographs on Instagram – or often just snacking some delicious
        chocolate.
      </BodyText>
    </SectionText>
    <SectionText label="Expertise" title="My focus">
      <BodyText>
        I mainly focus on UI / UX, website design &amp; development and print
        design – but I’m happy to work with you on whatever you think I’m
        capable of.
      </BodyText>
    </SectionText>
    <Gallery
      squared
      images={[
        {
          src: '/imgs/about/setup.jpg',
          alt: 'My setup',
          width: 380,
          height: 380,
        },
        {
          src: '/imgs/about/work.jpg',
          alt: 'Working close together with my clients',
          width: 624,
          height: 390,
        },
        {
          src: '/imgs/about/me.jpg',
          alt: 'Myself',
          width: 380,
          height: 380,
        },
      ]}
    />
  </>
)

export default AboutPage

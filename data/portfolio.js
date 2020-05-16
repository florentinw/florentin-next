import { BodyText } from '../components'

export default {
  howtomusic: {
    name: 'How To Music',
    client: 'United Creators PMB GmbH',
    headline: 'Designing physical campaigns for a digital product',
    skills: 'Print Design',
    summary:
      'In the funk-produced YouTube series "How to Music", the audience accompanies six up-and-coming musicians who are breaking new ground in the music industry.',
    introduction: (
      <>
        <BodyText>
          How do you start a music career? How to Music accompanies six young up-and-coming musicians on their hard way into the music
          industry. In addition to talent, songwriters need many skills and work hard to be successful in the music industry for the long
          term.
        </BodyText>
        <BodyText>
          With hard training, practice and the tips and tricks for appearances, personality, performance, studio recordings and provoking
          challenges, the young artists learn new skills week after week to further advance their music careers bringing them closer to
          their big dream of a record deal.
        </BodyText>
        <BodyText>The next tough challenge is never far away!</BodyText>
      </>
    ),
    background: {
      type: 'img',
      src: require('../assets/imgs/portfolio/howtomusic/cover/background.jpg')
    },
    addonImage: require('../assets/imgs/portfolio/howtomusic/poster2.jpg'),
    seoImage: '/meta/howtomusic.jpg'
  },
  shorttech: {
    name: 'ShortTech',
    client: 'ShortTech',
    headline: 'Rethinking how Gen Z interacts with tech news',
    skills: 'Web Design & Branding',
    summary: 'ShortTech truly simplifies the way young generations consume  consumer electronic media.',
    introduction: (
      <>
        <BodyText>
          ShortTech is a non-profit tech project built by a small team of young teenagers who love to engage with consumer electronics &amp;
          tech gadgets.
        </BodyText>
        <BodyText>
          Since mid 2017 they report on the newest innovations in the tech &amp; media world live on Twitter and on their blog. No matter if
          during weekdays or the weekends: ShortTech is always well informed about all topics and provides up-to-date news directly for you.
        </BodyText>
      </>
    ),
    background: {
      type: 'gradient',
      from: '#7447BA',
      to: '#1DA6CB'
    },
    addonImage: require('../assets/imgs/portfolio/shorttech/cover/addon.jpg'),
    seoImage: '/meta/shorttech.jpg'
  },
  optikbluemel: {
    name: 'Optik Blümel',
    client: 'Blümel & Liebschwager GbR',
    headline: 'Moving traditional companies into the digital age',
    skills: 'Web Design & Development',
    summary: 'Optik Blümel & Liebschwager combines great tradition and personal advice at expert level with modern, trendy looks.',
    introduction: (
      <>
        <BodyText>
          Since 1977 the shop "Augenoptik Uhren Schmuck" (Optics, Watches &amp; Jewelry) exists at the Bahnhofstrasse 19. Their small team
          attaches great importance to individual consulting, quality and timeless design. Personal connections and customer satisfaction
          are also keys element to their business.
        </BodyText>
        <BodyText>
          They feature a large selection of trendy spectacle frames in your visual acuity, color and personal style. No matter if for far,
          near or progressive vision, for all sports or work - you are optimally equipped with Optik Blümel &amp; Liebschwager.
        </BodyText>
      </>
    ),
    background: {
      type: 'img',
      src: require('../assets/imgs/portfolio/optikbluemel/cover/background.jpg'),
      to: '#3a3c42',
      from: '#222427'
    },
    addonImage: require('../assets/imgs/portfolio/optikbluemel/cover/addon.jpg'),
    seoImage: '/meta/optikbluemel.jpg'
  }
}

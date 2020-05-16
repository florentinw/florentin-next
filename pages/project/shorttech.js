import { ProjectWrapper, BodyText, Image, CustomLink, SectionText, Section, ImageWithContainer, Gallery } from '../../components'

const ShortTechProject = () => (
  <ProjectWrapper slug='shorttech'>
    <Section>
      <ImageWithContainer src={require('../../assets/imgs/portfolio/shorttech/business-cards.jpg')} alt='ShortTech business cards' />
      <SectionText
        label='The Logo'
        title='s + t is short for ShortTech'
        text='The simple, yet clear letter mark endows the young brand with an unique look and high recognition value. It works for all form
            factors from small to big.'
      >
        <Image src={require('../../assets/imgs/portfolio/shorttech/logo-showcase.jpg')} alt='ShortTech Logo showcase' />
      </SectionText>
    </Section>
    <Section>
      <ImageWithContainer src={require('../../assets/imgs/portfolio/shorttech/twitter-app.jpg')} alt='ShortTech on Twitter' />
      <SectionText label='Why Twitter' title='Go where your community lives'>
        <BodyText>
          Twitter connects 100 million daily-active users with over 500 million tweets sent per day. 37% of all users are between the
              ages of 18 and 29. And with{' '}
          <CustomLink isExternal href='https://www.journalism.org/2017/09/07/news-use-across-social-media-platforms-2017'>74% of twitter users</CustomLink>{' '}
              stating to utilize the social network as their primary source for news, it's the perfect platform for ShortTech.
        </BodyText>
        <BodyText>
          And their success can be measured: As they started out with their twitter account, they quickly reached hundreds of followers.
        </BodyText>
      </SectionText>
    </Section>
    <Section>
      <ImageWithContainer src={require('../../assets/imgs/portfolio/shorttech/website-perspective.jpg')} alt='ShortTech website overview' />
      <SectionText label='The Blog' title='In-depth reviews &amp; tutorials'>
        <BodyText>
          They reached out to further extend their twitter account with a blog. I chose Ghost as the CMS of choice, which is
          particularly focused on blogging. The blog covers more in-depth reviews, tutorials and personal opinions on topics around tech
          &amp; media world.
        </BodyText>
        <BodyText>
          My job was to design &amp; develop a custom design for all pages. During my process I focused on colorful &amp; playful
          layouts delivering real emotions.
        </BodyText>
      </SectionText>
      <ImageWithContainer src={require('../../assets/imgs/portfolio/shorttech/home.jpg')} alt='ShortTech website' />
    </Section>
    <Section>
      <ImageWithContainer src={require('../../assets/imgs/portfolio/shorttech/alexa.jpg')} alt='ShortTech is also available using an Alexa Skill' />
      <SectionText label='Alexa Flash Briefing Skill' title='Alexa, tell me the news'>
        <BodyText>
          Together with the team from ShortTech we also developed a custom Alexa Skill, which directly integrates with the newest tweets
          &amp; blog posts. Just say "Alexa, tell me the news" and stay always up to date!
        </BodyText>
        <BodyText>
          Customers discover and enable the skill in the Alexa app or through voice, the first time they listen to flash briefing.
        </BodyText>
      </SectionText>
    </Section>
    <Section>
      <Gallery
        images={[
          {
            src: require('../../assets/imgs/portfolio/shorttech/stickers.jpg'),
            alt: 'ShortTech stickers'
          },
          {
            src: require('../../assets/imgs/portfolio/shorttech/tshirt.jpg'),
            alt: 'ShortTech merchandise'
          }
        ]}
      />
      <SectionText label='Materials for events' title='Being present'>
        <BodyText>
          ShortTech also markets themself outside the online world. Being present on events gives them the opportunity to meet their
          fans and engage with the fast-growing community. Of course stickers &amp; merchandising play a major role.
        </BodyText>
      </SectionText>
    </Section>
  </ProjectWrapper>
)

export default ShortTechProject

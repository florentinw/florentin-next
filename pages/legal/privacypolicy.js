import { Header, Subtitle, SubtitleSmall, BodyText, Highlight, CustomLink, Container, List, Navbar, GoBackHomeButton, InlineNavItem, MetaHead } from '../../components'
import calcAge from '../components/util/calcAge'

const PrivacyPolicy = () => (
  <>
    <MetaHead
      title='Privacy Policy' description={`${calcAge(
        '2002/06/17'
      )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`} image={require('../assets/imgs/meta/card.jpg')} slug=''
    />
    <Navbar
      leftContent={<GoBackHomeButton>Back to my works</GoBackHomeButton>}
      rightContent={
        <nav>
          <ul>
            <InlineNavItem href='/legal'>Legal Disclosure</InlineNavItem>
            <InlineNavItem href='/legal/privacypolicy'>Privacy Policy</InlineNavItem>
            <InlineNavItem href='/legal/termsandconditions'>Terms &amp; Conditions</InlineNavItem>
          </ul>
        </nav>
      }
    />
    <Header content='In general, our website can be used without providing any personal data. If personal data (such as name, postal or email addresses) are collected, this will occur on a voluntary basis' />
    <Container>
      <Subtitle>General</Subtitle>
      <BodyText>
        The operator of this site takes the protection of your personal data very seriously. We treat your personal data confidentially
        and in accordance with the statutory data protection regulations and this privacy policy.
      </BodyText>
      <BodyText>
        If you (hereinafter referred to as "user") use this website, various personal data (hereinafter also referred to as "data") is
        collected in order to enable the user to use the service. Personal information is information that personally identifies you.
        This Privacy Policy explains the nature, scope and purpose of the processing of personal data.
      </BodyText>
      <BodyText>
        With regard to the terminology used, e.g. "Processing" or "Responsible", we refer to the definitions in Article 4 of the General
        Data Protection Regulation (GDPR).
      </BodyText>
      <BodyText>
        We point out that data transmission over the Internet can have security gaps. A complete protection of the data from access by
        third parties is not possible.
      </BodyText>
      <Subtitle>Note to the responsible body</Subtitle>
      <BodyText> The responsible data processing unit on this website is:</BodyText>
      <BodyText>
        <Highlight>Florentin Walter</Highlight>
        <br />
            Breslauerstraße 12 · 63927 Bürgstadt · Germany
      </BodyText>
      <BodyText>
        <Highlight>Mail:</Highlight> hello@florentin.design <br />
        <Highlight>Phone:</Highlight> 0174 8860123
      </BodyText>
      <BodyText>
        Responsible body is the natural or legal person who, alone or in concert with others, decides on the purposes and means of
        processing personal data (eg names, e-mail addresses, etc.).
      </BodyText>
      <Subtitle>Rights of the user</Subtitle>
      <BodyText>Users have the right to</BodyText>
      <List
        items={[
          'information about their stored personal data, origin of the data, their recipients and the purpose of data processing.',
          'correct or complete incorrect or incomplete data.',
          'immediate deletion of the data concerning them or, alternatively, if further processing is required due to legal obligations, to the restriction of data processing. Data will be deleted or blocked as soon as the purpose of the storage is omitted, the deletion of the data does not conflict with any statutory storage requirements and subsequently no other information is provided on individual processing methods.``revoke an already given consent to the processing of their data. All you need to do is inform us by e-mail. The legality of the data processing carried out until the revocation remains unaffected by the revocation.',
          'receive the data concerning them and provided by them and to transmit this data to other providers / persons responsible.',
          'appeal to the regulator so they can comply with the privacy policy.'
        ]}
      />
      <BodyText>
        In this regard and also to further questions on the subject of personal data, you can always contact us via the contact options
        listed in the legal notice.
      </BodyText>
      <Subtitle> Customer and contract data</Subtitle>
      <BodyText>
        We collect, process and use personal data insofar as this is necessary for the performance of a contract or precontractual
        measures (in accordance with Article 6 (1) (b) GDPR).
      </BodyText>
      <BodyText>
        We only transfer personal data to third parties if this is necessary within the scope of the contract, for example to the bank
        responsible for processing the payment. A further transmission of the data does not take place or only if you have expressed
        consent to the transmission. A transfer of your data to third parties without explicit consent, such as for advertising
        purposes, does not occur.
      </BodyText>
      <Subtitle>External links and social media</Subtitle>
      <BodyText>
        For external links, the respective privacy policy of the linked website applies, for our social media profiles those of the
        respective provider or the platform.
      </BodyText>
      <Subtitle>Cookies</Subtitle>
      <BodyText>
        The internet pages partly use so-called cookies. Cookies serve to make our offer more user-friendly, effective and secure.
        Cookies are small text files that are stored on your computer and stored by your browser. Different information can be stored
        within the cookies. Cookies do not harm your computer and do not contain viruses.
      </BodyText>
      <BodyText>
        Most of the cookies we use are so-called "session cookies". They are automatically deleted after your visit. Other cookies
        remain stored on your device until you delete them. These cookies allow us to recognize your browser the next time you visit.
      </BodyText>
      <BodyText>
        The setting of cookies through your web browser can be prevented. However, some functions and offers of our site could be
        restricted. If you want to deactivate the cookies, you can disable the corresponding option in your browser settings. Saved
        cookies can be deleted at any time in the settings of the browser.
      </BodyText>
      <Subtitle>Hosting</Subtitle>
      <SubtitleSmall>Server log files</SubtitleSmall>
      <BodyText>
        In server log files, the provider of the pages automatically collects and stores information that is automatically transmitted
        by your browser and that is absolutely necessary for accessing the website.
      </BodyText>
      <BodyText>
        Provider of the hosting offer is the TrafficPlex GmbH, Konsul-Smidt-Str. 90, 28217 Bremen (hereafter "Hoster"). At every page
        request, our hoster logs your IP address, date and time of the server request and a unique access ID to ensure the secure
        operation of the server systems. This data will be deleted automatically by the hoster after 7 days. A merge of this data with
        other data sources does not take place.
      </BodyText>
      <BodyText>
        The basis for data processing is Article 6 (1) (b) GDPR, which allows the processing of data to fulfill a contract or
        pre-contractual measures.
      </BodyText>
      <SubtitleSmall>SSL or TLS encryption</SubtitleSmall>
      <BodyText>
        This site uses for security reasons and to protect the transmission of confidential content that you send to us as a site
        operator, an SSL or. TLS encryption. You will recognize an encrypted connection at the "https: //" address bar of your browser
        and at the lock icon in the browser bar.
      </BodyText>
      <BodyText>If SSL or TLS encryption is enabled, the data you submit to us can not be read by third parties.</BodyText>
      <SubtitleSmall>Content-Delivery-Network by Cloudflare</SubtitleSmall>
      <BodyText>
        We use a so-called "Content Delivery Network" (CDN) offered by Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA.
        Cloudflare is certified under the Privacy Shield Agreement, providing a guarantee to comply with European privacy legislation (
        <CustomLink isExternal href='https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&status=Active'>
          privacyshield.gov/participant?id=a2zt0000000GnZKAA0&status=Active
        </CustomLink>
            ).
      </BodyText>
      <BodyText>
        A CDN is a service that helps deliver content from our online offering, especially large media files, such as graphics or
        scripts, using regionally distributed and Internet-connected servers. The processing of the data of the users takes place solely
        for the aforementioned purposes and the maintenance of the security and functionality of the CDN.
      </BodyText>
      <BodyText>
        Use is made on the basis of our legitimate interests, i. Interest in a safe and efficient provision, analysis and optimization
        of our online offer in accordance with Article 6 (1) (f) GDPR.
      </BodyText>
      <BodyText>
        {' '}
            For more information, see the Cloudflare Privacy Policy:{' '}
        <CustomLink href='https://www.cloudflare.com/security-policy' isExternal>cloudflare.com/security-policy</CustomLink>.
      </BodyText>
      <Subtitle> Communication and contact</Subtitle>
      <BodyText>
        Data submitted during contact including your contact information will be stored to process your request or to be available for
        follow-up questions.
      </BodyText>
      <BodyText>
        To submit your messages via the contact form (currently not present), we rely on the third party "Basin" (
        <CustomLink href='https://usebasin.com/' isExternal>usebasin.com</CustomLink>), which stores the submitted form content on its server, also
            outside the EU, for further processing. The privacy policy of Basin (
        <CustomLink href='https://usebasin.com/privacy' isExternal>usebasin.com/privacy</CustomLink>) applies. You can request a deletion of your
            data from our service provider at
        <CustomLink href='https://usebasin.com/gdpr' isExternal>usebasin.com/gdpr</CustomLink>.
      </BodyText>
      <BodyText>
        Submitted data remains with us until you ask us for deletion, revoke your consent to the storage or there is no need for data
        storage. Mandatory statutory provisions - especially retention periods - remain unaffected.
      </BodyText>
      <BodyText>
        When communicating with other, external service providers, the respective privacy policy of the service provider applies.
      </BodyText>
      <Subtitle>External tools</Subtitle>
      <SubtitleSmall>Matomo for analysis and tracking</SubtitleSmall>
      <BodyText>
        Our website uses Matomo (formerly "PIWIK"). This is an open source software with which we can analyze the use of our website.
      </BodyText>
      <BodyText>
        In this case, your IP address, previously anonymised to 2 bytes, in order to make it impossible to assign you to the Internet
        connection you are using, the type of browser you are using and the browser version, operating system, country of origin, date
        and time you are using the server request, the number of visits, your length of stay on the site and the external links you have
        stored and processed on a server in Germany. There is no disclosure of this data to third parties.
      </BodyText>
      <BodyText>
        The legal basis is Article 6 (1) (f) GDPR. Our legitimate interest lies in the analysis and optimization of our website.
      </BodyText>
      <BodyText>
        To record this data Matomo stores a cookie on your device via your Internet browser. This cookie is valid for one week. For more
        information, see "Cookies".
      </BodyText>
      <BodyText>
        Users can object to the anonymized data collection by the program Matomo at any time with effect for the future by clicking on
        the link below. In this case, a so-called opt-out cookie is stored in your browser, with the result that Matomo no longer
        collects session data. When users delete their cookies, the opt-out cookie is also deleted and must be reactivated by the users.
      </BodyText>
      <iframe
        title='Matomo'
        style={{ border: 0, height: 200, width: 600 }}
        src='https://analytics.florentinwalter.de/index.php?module=CoreAdminHome&action=optOut&language=de&backgroundColor=ffffff&fontColor=&fontSize=&fontFamily='
      />
      <Subtitle>Payment providers</Subtitle>
      <SubtitleSmall>PayPal</SubtitleSmall>
      <BodyText>
        Among other payment providers, we offer payment via PayPal.. Provider of this payment service is PayPal (Europe) S.à.r.l. et
        Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (hereafter "PayPal").
      </BodyText>
      <BodyText>If you choose to pay via PayPal, the payment details you enter will be sent to PayPal.</BodyText>
      <BodyText>
        The transmission of your data to PayPal is based on Article 6 (1) (a) GDPR. (consent) and Article 6 (1) (b) GDPR. (processing to
        fulfill a contract). You have the option to revoke your consent to data processing at any time. Revocation does not affect the
        effectiveness of historical data processing operations.
      </BodyText>
      <Subtitle>Final provisions</Subtitle>
      <SubtitleSmall>Change of our privacy policy</SubtitleSmall>
      <BodyText>
        We reserve the right to amend this privacy policy to always comply with the latest legal requirements or to implement changes to
        our services in the privacy policy, e.g. when introducing new services. Your new visit will be subject to the new privacy
        policy.
      </BodyText>
    </Container>
  </>
)

export default PrivacyPolicy

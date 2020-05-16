import Head from 'next/head'
import PropTypes from 'prop-types'

const MetaHead = ({ title, description, image, slug, children, isHome }) => (
  <Head>
    <meta charset='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
    <title>{isHome ? title : `${title} | Florentin Walter — Freelance Graphic Designer`}</title>
    <meta name='title' content={isHome ? title : `${title} | Florentin Walter — Freelance Graphic Designer`} />
    <meta name='description' content={description} />
    <meta property='og:title' content={isHome ? title : `${title} | Florentin Walter — Freelance Graphic Designer`} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={'https://florentin.design' + image} />
    <meta property='og:url' content={`https://florentin.design/${slug}`} />
    <meta name='twitter:title' content={isHome ? title : `${title} — Florentin Walter`} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={'https://florentin.design' + image} />
    <meta name='apple-mobile-web-app-title' content='Florentin Walter' />
    <meta name='theme-color' content='#eeeeee' />
    <meta name='msapplication-TileColor' content='#222222' />
    <meta name='application-name' content='Florentin Walter' />
    <meta property='og:type' content='website' />
    <meta property='og:locale' content='en_US' />
    <meta property='og:site_name' content='florentin.design' />
    <meta name='twitter:site' content='@florentin' />
    <meta name='twitter:creator' content='@florentin' />
    <meta name='twitter:card' content='summary_large_image' />
    <link rel='shortcut icon' href='https://florentin.design/favicon.ico' type='image/x-icon' />
    <meta property='og:logo' content='https://florentin.design/logo-400.jpg' size='400x400' />
    <meta property='og:logo' content='https://florentin.design/logo-128.jpg' ize='128x128' />
    <script
      type='text/javascript' dangerouslySetInnerHTML={{
        __html: ` var _paq = window._paq || [];
                  _paq.push(['trackPageView']);
                  _paq.push(['enableLinkTracking']);
                  (function () {
                    var u = "//analytics.florentinwalter.de/";
                    _paq.push(['setTrackerUrl', u + 'matomo.php']);
                    _paq.push(['setSiteId', '6']);
                    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
                    g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
                })();
              `
      }}
    />
    {children}
  </Head>
)

MetaHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.object,
  isHome: PropTypes.bool
}

export default MetaHead
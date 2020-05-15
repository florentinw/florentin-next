import PropTypes from 'prop-types'


const SEO = ({ title, description, image, slug, isHome }) => (
    <>
        <title>{`${title} | Florentin Walter — Freelance Graphic Designer`}</title>
        <meta name='title' content={`${title} | Florentin Walter — Freelance Graphic Designer`} />
        <meta name='description' content={description} />
        <meta property='og:title' content={`${title} | Florentin Walter — Freelance Graphic Designer`} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={'https://florentin.design' + image} />
        <meta property='og:url' content={`https://florentin.design/${slug}`} />
        <meta name='twitter:title' content={`${title} — Florentin Walter`} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={'https://florentin.design' + image} />
    </>
)

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isHome: PropTypes.boolean
}

export default SEO;

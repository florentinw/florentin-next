import Head from 'next/head'
import { ReactChild } from 'react'

const MetaHead = ({
  title,
  description,
  image,
  slug,
  children,
  isHome,
}: {
  title: string
  description: string
  image: string
  slug: string
  children?: ReactChild | ReactChild[]
  isHome?: boolean
}) => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>
      {isHome
        ? title
        : `${title} | Florentin Walter — Freelance Graphic Designer`}
    </title>
    <meta
      name="title"
      content={
        isHome
          ? title
          : `${title} | Florentin Walter — Freelance Graphic Designer`
      }
    />
    <meta name="description" content={description} />
    <meta
      property="og:title"
      content={
        isHome
          ? title
          : `${title} | Florentin Walter — Freelance Graphic Designer`
      }
    />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`https://florentin.design/${image}`} />
    <meta property="og:url" content={`https://florentin.design/${slug}`} />
    <meta
      name="twitter:title"
      content={isHome ? title : `${title} — Florentin Walter`}
    />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`https://florentin.design/${image}`} />
    <meta name="apple-mobile-web-app-title" content="Florentin Walter" />
    <meta name="theme-color" content="#eeeeee" />
    <meta name="msapplication-TileColor" content="#222222" />
    <meta name="application-name" content="Florentin Walter" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="florentin.design" />
    <meta name="twitter:site" content="@florentin" />
    <meta name="twitter:creator" content="@florentin" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href={`https://florentin.design/${slug}`} />
    <link
      rel="shortcut icon"
      href="https://florentin.design/favicon.ico"
      type="image/x-icon"
    />
    <meta property="og:logo" content="https://florentin.design/logo-128.jpg" />

    {children}
  </Head>
)

export default MetaHead

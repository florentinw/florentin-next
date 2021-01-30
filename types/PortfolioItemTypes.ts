type PortfolioItemTypes = {
  slug: string
  name: string
  client: string
  headline: string
  skills: string
  summary: string
  introduction: JSX.Element
  background: {
    type: 'img' | 'gradient'
    src?: string
    from?: string
    to?: string
  }
  addon: {
    src: string
    height: number
    width: number
  }
  seoImage: string
}

export default PortfolioItemTypes

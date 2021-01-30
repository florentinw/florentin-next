import styled from 'styled-components'

import Link from 'next/link'
import Image from 'next/image'

import { Label, Subtitle } from '.'

const AddonWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
`

const AddonImage = styled(Image)`
  max-height: 80%;
  max-width: 80%;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  display: block;
`

const Wrapper = styled.article<{
  background: {
    type: string
    from?: string
    to?: string
    src?: string
  }
}>`
  border-radius: 5px;
  padding: calc(20px + 8%) calc(14px + 8%);
  margin: 24px 12px;
  cursor: pointer;
  position: relative;
  background: ${(p) => {
    if (p.background.type === 'img')
      return `url("${p.background.src}") no-repeat center / cover`
    if (p.background.type === 'gradient')
      return `linear-gradient(to top right,${p.background.from}, ${p.background.to})`
    return p.theme.lowerContrast
  }};

  * {
    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
    color: white !important;
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow ease-out 1s;
  }

  &.addon-postion-right {
    ${Subtitle} {
      max-width: 40%;
      min-width: 220px;
    }
    ${Label} {
      max-width: 55%;
    }
    ${AddonWrapper} {
      justify-content: flex-end;
      align-items: center;
      ${AddonImage} {
        max-width: 45%;
        margin-right: -3%;
      }
    }
  }

  &.addon-postion-bottom {
    ${Subtitle} {
      max-width: 80%;
      min-width: 220px;
    }
    ${AddonWrapper} {
      justify-content: center;
      align-items: flex-end;
      ${AddonImage} {
        max-height: 60%;
      }
    }
  }
  &.howtomusic {
    background: ${(p) =>
      `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("${p.background.src}") no-repeat center / cover`};

    ${Subtitle} {
      max-width: 55%;
    }
  }
  &.shorttech {
    padding-bottom: 60%;
  }
  &.optikbluemel ${AddonImage} {
    max-width: 65% !important;
    margin-right: -20% !important;
  }

  @media screen and (max-width: 580px) {
    ${Subtitle} {
      width: 100%;
      hyphens: auto;
    }
    &.addon-postion-right {
      ${AddonWrapper} {
        justify-content: center;
        align-items: flex-end;
        ${AddonImage} {
          max-width: 80% !important;
          margin-bottom: -30%;
          margin-right: 0 !important;
        }
      }
    }
    &.howtomusic {
      padding-bottom: 90%;
    }
    &.optikbluemel {
      padding-bottom: 55%;
      ${AddonImage} {
        margin-bottom: 0% !important;
      }
    }
  }
`

const PortfolioItem = ({
  name,
  headline,
  skills,
  background,
  addonImage,
  addonPosition,
  slug,
}: {
  name: string
  headline: string
  skills: string
  background: {
    type: string
    from?: string
    to?: string
    src?: string
  }
  addonImage: string
  addonPosition: string
  slug: string
}) => (
  <Link href={`/project/${slug}`}>
    <a
      style={{
        textDecoration: 'none',
        transformStyle: 'preserve-3d',
        display: 'block',
        WebkitTransformStyle: 'preserve-3d',
        WebkitBackfaceVisibility: 'hidden',
      }}
      aria-label={headline}
      className="apply-tilt"
    >
      <Wrapper
        background={background}
        className={`${slug} addon-postion-${addonPosition}`}
      >
        <Label>{name}</Label>
        <Subtitle nopadding={true} style={{ lineHeight: 1.2 }}>
          {headline}
        </Subtitle>
        <Label>{skills}</Label>
        <AddonWrapper>
          <AddonImage src={addonImage} alt={name} height={10} width={10} />
        </AddonWrapper>
      </Wrapper>
    </a>
  </Link>
)

export default PortfolioItem

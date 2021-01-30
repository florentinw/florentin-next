import { ReactChild } from 'react'

const Icon = ({
  width,
  height,
  strokeColor,
  strokeWidth,
  children,
}: {
  width?: number
  height?: number
  strokeColor?: string
  strokeWidth?: string
  children?: ReactChild | ReactChild[]
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 30}
    height={height || 30}
    viewBox="0 0 24 24"
    fill="none"
    stroke={strokeColor || 'var(--higherContrast)'}
    strokeWidth={strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline' }}
  >
    {children}
  </svg>
)

export default Icon

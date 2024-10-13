import HeroTopContainer from './heroTopStyles'

interface HeroTopProps {
  children: React.ReactNode
}
const HeroTop = ({ children }: HeroTopProps) => {
  return <HeroTopContainer>{children}</HeroTopContainer>
}

export default HeroTop

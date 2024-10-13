import Button, { HeroButtonProps } from './heroButtonStyles'

const HeroButton: React.FC<HeroButtonProps> = ({ fontSize, children }) => {
  return <Button fontSize={fontSize}>{children}Account</Button>
}

export default HeroButton

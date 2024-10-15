import Button, { HeroButtonProps } from './heroButtonStyles'

const HeroButton: React.FC<HeroButtonProps> = ({
  fontSize,
  children,
  onClick
}) => {
  return (
    <Button fontSize={fontSize} onClick={onClick}>
      {children}Account
    </Button>
  )
}

export default HeroButton

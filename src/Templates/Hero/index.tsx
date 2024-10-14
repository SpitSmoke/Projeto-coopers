import HeroButton from '../../Components/HeroButton'
import HeroTop from '../../Containers/HeroTop'
import HeroTemplate, { ArrowIcon, LogoImage } from './heroStyles'
import HeroContent from '../../Containers/HeroContent'

import Logo from '../../Images/ImagesTodoList/Logo.svg'
import Arrow from '../../Images/ImagesTodoList/icon-scroll.svg'

const Hero = () => (
  <HeroTemplate>
    <HeroTop>
      <LogoImage src={Logo} />
      <HeroButton />
    </HeroTop>
    <HeroContent />
    <ArrowIcon src={Arrow} />
  </HeroTemplate>
)
export default Hero

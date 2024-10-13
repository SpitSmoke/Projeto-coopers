import HeroButton from '../../Components/HeroButton'
import HeroTop from '../../Containers/HeroTop'
import HeroTemplate, { BackGroundImage, LogoImage } from './heroStyles'
import HeroContent from '../../Containers/HeroContent'

import BG from '../../Images/ImagesTodoList/BG.svg'
import Logo from '../../Images/ImagesTodoList/Logo.svg'

const Hero = () => (
  <HeroTemplate>
    <HeroTop>
      <LogoImage src={Logo} />
      <HeroButton />
    </HeroTop>
    <HeroContent />
    {/* <BackGroundImage src={BG} /> */}
  </HeroTemplate>
)
export default Hero

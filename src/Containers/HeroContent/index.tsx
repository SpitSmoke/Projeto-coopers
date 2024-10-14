import HeroStuff from '../../Components/Herostufff'
import ContentContainer, { BackGroundImage, OfficeImage } from './HeroStyle'

import Office from '../../Images/ImagesTodoList/02.svg'
import BG from '../../Images/ImagesTodoList/BG.svg'

const HeroContent = () => {
  return (
    <>
      <ContentContainer>
        <HeroStuff />
        <OfficeImage src={Office} />
      </ContentContainer>
      <BackGroundImage src={BG} />
    </>
  )
}
export default HeroContent

import HeroStuff from '../../Components/Herostufff'
import ContentContainer, { OfficeImage } from './HeroStyle'

import Office from '../../Images/ImagesTodoList/02.svg'

const HeroContent = () => {
  return (
    <ContentContainer>
      <HeroStuff />
      <OfficeImage src={Office} />
    </ContentContainer>
  )
}
export default HeroContent

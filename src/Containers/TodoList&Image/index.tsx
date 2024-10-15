import ContainerImage from './styles'

import LateralEsquerda from '../../Images/ImagesTodoList/grafismos-lateral-esquerda.svg'

const SideImage = () => {
  return (
    <ContainerImage>
      <img src={LateralEsquerda} alt="Lateral Esquerda" />
    </ContainerImage>
  )
}
export default SideImage

import { useState } from 'react' // Importando useState
import HeroButton from '../../Components/HeroButton'
import HeroTop from '../../Containers/HeroTop'
import HeroTemplate, { ArrowIcon, LogoImage } from './heroStyles'
import HeroContent from '../../Containers/HeroContent'
import Logo from '../../Images/ImagesTodoList/Logo.svg'
import Arrow from '../../Images/ImagesTodoList/icon-scroll.svg'
import LoginModal from '../../Templates/Login' // Importando o LoginModal

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar o modal

  const handleLoginSuccess = () => {
    // Aqui você pode adicionar a lógica que precisa após o login
    console.log('Usuário logado com sucesso!')
    setIsModalOpen(false) // Fecha o modal após o login
  }

  return (
    <>
      <HeroTemplate>
        <HeroTop>
          <LogoImage src={Logo} />
          <HeroButton onClick={() => setIsModalOpen(true)} />{' '}
          {/* Adiciona a função para abrir o modal */}
        </HeroTop>
        <HeroContent />
        <ArrowIcon src={Arrow} />
      </HeroTemplate>

      {/* Modal de Login */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Fecha o modal
        onLogin={handleLoginSuccess} // Chama a função após o login
      />
    </>
  )
}

export default Hero

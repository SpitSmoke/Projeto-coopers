import { useState } from 'react'
import ModalOverlay, {
  Button,
  CloseButton,
  ContainerForm,
  Input,
  Label,
  ModalContainer,
  StyledImage,
  LoginModalProps,
  GreenText,
  TittleLogin,
  LoginTitleContainer,
  Container
} from './LoginStyles'

import ImageLogin from '../../Images/ImagesLogin/imageLogin.svg'

const LoginModal = ({ isOpen, onClose, onLogin, style }: LoginModalProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Tentando fazer login com:', username, password) // Log para depuração
    if (username && password) {
      onLogin()
      onClose()
    } else {
      alert('Please fill all the Fields')
    }
  }

  if (!isOpen) return null

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <LoginTitleContainer>
          <StyledImage src={ImageLogin} alt="Login Image" />
          <Container>
            <TittleLogin>Sign in</TittleLogin>
            <GreenText
              color={style?.color || '#4AC959'}
              fontWeight={style?.fontWeight || '400'}
              fontSize={style?.fontSize || '50px'}
              lineHeight={style?.lineHeight || '64px'}
              fontFamily={style?.fontFamily || 'Montserrat'}
              dInline={style?.dInline || 'inline'}
            >
              to access your list
            </GreenText>
          </Container>
        </LoginTitleContainer>
        <ContainerForm>
          <Label>User:</Label>
          <Input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Sign In</Button>
        </ContainerForm>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default LoginModal

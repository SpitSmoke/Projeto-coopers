import styled from 'styled-components'

export interface GreenTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string
  fontWeight?: string
  fontSize?: string
  lineHeight?: string
  fontFamily?: string
  dInline?: string
}

export interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
  style?: {
    color?: string
    fontWeight?: string
    fontSize?: string
    lineHeight?: string
    fontFamily?: string
    dInline?: string
  }
}
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
export default ModalOverlay

export const ModalContainer = styled.div`
  display: flex;
  width: 932px;
  height: 721px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`
export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 55px;
  height: 64px;
  margin-right: 23px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 64px;
`
export const Input = styled.input`
  width: 342px;
  height: 54px;
  font-size: 21px;
  border-radius: 10px;
  border: 1px solid #959595;
  padding: 10px;
  margin-bottom: 30px;
`
export const Button = styled.button`
  width: 300px;
  height: 64px;
  top: 721px;
  left: 600px;
  cursor: pointer;
  background-color: #4ac959;
  border: none;
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 29.26px;
  margin-top: 16px;
  margin-left: 20px;
  margin-right: 20px;
`
export const Label = styled.label`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 29.26px;
  margin-bottom: 3px;
  text-align: left;
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 346px;
  margin-right: 265px;
  width: 342px;
  height: auto;
`
export const StyledImage = styled.img`
  margin-top: 76px;
  // margin-left: 52px;
  width: 231px;
  height: 231px;
`
export const GreenText = styled.span<GreenTextProps>`
  color: ${(props) => props.color || '#4AC959'};
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '50px'};
  line-height: ${(props) => props.lineHeight || '64px'};
  font-family: ${(props) => props.fontFamily || 'Montserrat'};
  display: ${(props) => props.dInline || 'inline'};
`
export const TittleLogin = styled.h1`
  display: inline-block;
  font-family: Montserrat;
  font-size: 80px;
  font-weight: 700;
  line-height: 64px;
`
export const LoginTitleContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 535px;
  height: auto;
  margin-left: 42px;
  margin-right: 122px;
  margin-top: 121px;
`

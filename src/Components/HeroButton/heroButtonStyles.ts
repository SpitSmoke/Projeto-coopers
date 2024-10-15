import styled from 'styled-components'

export interface HeroButtonProps {
  fontSize?: string | number
  children?: React.ReactNode
  onClick?: () => void
}

const Button = styled.button<HeroButtonProps>`
  width: 120px;
  height: 40px;
  padding: 9px 35px 10px 40px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  line-height: 21px;
  background-color: #000000;
  border: none;
  cursor: pointer;
`

export default Button

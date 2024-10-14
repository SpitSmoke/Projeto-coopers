import styled from 'styled-components'

const HeroTemplate = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
  padding: 80px;

  @media (max-width: 768px) {
    height: 50vh;
  }
`
export default HeroTemplate

export const LogoImage = styled.img`
  width: 217px;
  height: 50px;
  top: 54px;
  left: 80px;
`

export const ArrowIcon = styled.img`
  width: 40px;
  height: 50px;
  top: 664px;
  left: 50%;
  position: absolute;
`

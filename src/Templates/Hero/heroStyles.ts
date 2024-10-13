import styled from 'styled-components'

const HeroTemplate = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
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

export const BackGroundImage = styled.img`
  width: 640px;
  height: 734px;
  top: 24px;
  left: 806px;
  margin: 0;
`

import styled from 'styled-components'

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 481.52px;
  margin-top: 52px;
  margin-right: 80px;
  z-index: 2;
`
export default ContentContainer

export const OfficeImage = styled.img`
  width: 443px;
  height: 481.52px;
  top: 149px;
  left: 685px;
`
export const BackGroundImage = styled.img`
  position: absolute;
  width: 640px;
  height: 734px;
  top: 24px;
  left: 800px;
  z-index: 1;
`

import styled from 'styled-components'

const ListTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 581px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`
export default ListTwoContainer

export const Green = styled.div`
  width: 380px;
  height: 20px;
  background-color: #4ac959;
`
export const ListTwoTittle = styled.h1`
  display: flex;
  font-family: Poppins;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 40px;
`
export const FirstLine = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 29.26px;
  margin-top: 20px;
  margin-left: 106px;
`
export const SecondLine = styled.span`
  display: block;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.26px;
  text-align: center;
`
export const UlDone = styled.ul`
  font-family: Montserrat;
  margin-left: 23px;
  flex-grow: 1;
  overflow-y: auto;
  margin-top: 44px;
`

export const LiDone = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  position: relative;
`
export const ButtonDeletAll = styled.button`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 24px;
  line-height: 29.26px;
  text-align: center;
  background-color: #000000;
  color: #fff;
  margin-top: 30px;
  margin-left: 40px;
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 300px;
  height: 64px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #4ac959;
    outline: none;
  }
`

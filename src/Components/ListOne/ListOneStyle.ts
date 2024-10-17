import styled from 'styled-components'

export interface ListOneProps {
  InputText: string
}

const ContainerListOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 754px;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`

export default ContainerListOne

export const Orange = styled.div`
  width: 380px;
  height: 20px;
  background-color: #e88d39;
`

export const ListOneTittle = styled.h1`
  display: flex;
  font-family: Poppins;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 40px;
`

export const SubTittle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 29.26px;
  margin-top: 20px;
  margin-left: 106px;
  margin-bottom: 20px;
`

export const FirstLine = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 400;
`

export const SecondLine = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 400;
  margin-left: 11px;
`

export const UlToDo = styled.ul`
  font-family: Montserrat;
  margin-left: 23px;
  margin-top: 20px;
  flex-grow: 1;
  overflow-y: auto;
`

export const LiToDo = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TaskText = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  text-decoration-color: ${({ completed }) => (completed ? '#ff0000' : 'none')};
  margin-left: 8px;
`

export const AddTaskButton = styled.button`
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
    background-color: #e88d39;
    outline: none;
  }
`

export const EditTaskButton = styled.button`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 24px;
  line-height: 29.26px;
  text-align: center;
  background-color: #000000;
  color: #fff;
  margin-left: 40px;
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 300px;
  height: 64px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e88d39;
  }
`

export const DeleteTaskButton = styled.button`
  border: none;
  background: none;
  color: #e88d39;
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;
`

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #e88d39;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  position: relative;
  background-color: transparent;

  &:checked::after {
    content: '\\2714';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #4caf50;
    font-size: 16px;
  }
`

export const Paragraph = styled.p`
  font-family: Montserrat;
  margin-left: 105px;
  margin-bottom: 5px;
`
export const InputTextAdd = styled.input`
  border: none;
  outline: none;
  text-align: center;
  color: #e88d39;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;

  &::placeholder {
    color: #e88d39;
    font-style: italic;
    font-family: Montserrat;
    font-size: 16px;
  }
`

import StuffContainer, {
  GreenText,
  StuffButton,
  StuffText,
  StuffTittle
} from './StuffStyles'

const HeroStuff = () => {
  return (
    <StuffContainer>
      <StuffTittle>
        Organize
        <GreenText>your daily jobs</GreenText>
      </StuffTittle>
      <StuffText>The only way to get things done</StuffText>
      <StuffButton>Go to To-do list</StuffButton>
    </StuffContainer>
  )
}
export default HeroStuff

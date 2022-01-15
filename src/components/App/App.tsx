import Flip from "../Flip";
import styled from "styled-components";

const MainWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
`

const AppContent = styled.div`
  padding: 2rem;
  display: grid;
  width: auto;
  max-width: 64rem;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`

const Title = styled.div`
  text-align: center;
`

const App = () => (
  <MainWrapper>
    <Title>
      Учење низ игра
    </Title>
    <AppContent>
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
      <Flip
        flippedContent='I have been flipped'
        normalContent='Click to flip me'
      />
    </AppContent>
  </MainWrapper>
)

export default App;

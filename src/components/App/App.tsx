import Flip from "../Flip";
import styled from "styled-components";

const AppContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;

  > div {
    margin: .5rem;
  }
`

const App = () => (
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
  </AppContent>
)

export default App;

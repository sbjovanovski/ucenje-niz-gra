import Flip from "../Flip";
import styled from "styled-components";
import {cards} from "../../constants";
import {useState} from "react";
import {Card} from "../../typings/types";

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
  box-sizing: border-box;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media all and (max-width: 75rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (max-width: 53rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 37rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Title = styled.div`
  text-align: center;
  font-weight: bold;
`

const CardImage = styled.img`
  border-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.8) 3px 2px 2px 1px;
`

const App = () => {
  const [stateCards, setStateCards] = useState<Card[]>(cards)

  return (
    <MainWrapper>
      <Title>
        Учење низ игра
      </Title>
      <AppContent>
        {stateCards.map((card: Card) => (
          <Flip
            key={card.id}
            front={<CardImage src={card.frontImage} alt={card.correctAnswer}/>}
            back={<CardImage src={card.backImage} alt={card.correctAnswer}/>}
            flipped={card.flipped}
            correctAnswer={card.correctAnswer}
          />
        ))}
      </AppContent>
    </MainWrapper>
  )
}

export default App;

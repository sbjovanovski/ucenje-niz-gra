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
  padding: 2rem 0;
  display: grid;
  margin: 0 auto;
  max-width: 64rem;
  box-sizing: border-box;
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

  const onCardDone = (word: string, card: Card) => {
    if (word.toLocaleLowerCase() === card.correctAnswer.toLocaleLowerCase()) {
      setStateCards((prevState: Card[]) => {
        const stateCardsClone = prevState.slice()
        const cardIndex = stateCardsClone.findIndex(c => c.id === card.id)
        if (cardIndex !== -1) {
          stateCardsClone[cardIndex].flipped = true
        }
        return stateCardsClone
      })
    } else {
      setStateCards((prevState: Card[]) => {
        const stateCardsClone = prevState.slice()
        const cardIndex = stateCardsClone.findIndex(c => c.id === card.id)
        if (cardIndex !== -1) {
          stateCardsClone[cardIndex].hasError = true
        }
        return stateCardsClone
      });
      setTimeout(() => {
        setStateCards((prevState: Card[]) => {
          const stateCardsClone = prevState.slice()
          const cardIndex = stateCardsClone.findIndex(c => c.id === card.id)
          if (cardIndex !== -1) {
            stateCardsClone[cardIndex].hasError = false
          }
          return stateCardsClone
        });
      }, 500)
    }
  }

  return (
    <MainWrapper>
      <Title>
        ?????????? ?????? ????????
      </Title>
      <AppContent>
        {stateCards.map((card: Card) => (
          <Flip
            key={card.id}
            front={<CardImage src={card.frontImage} alt={card.correctAnswer}/>}
            back={<CardImage src={card.backImage} alt={card.correctAnswer}/>}
            flipped={card.flipped}
            correctAnswer={card.correctAnswer}
            hasError={!!card.hasError}
            onDone={(word: string) => onCardDone(word, card)}
          />
        ))}
      </AppContent>
    </MainWrapper>
  )
}

export default App;

import styled from 'styled-components'
import {ReactNode} from "react";
import InputCharacters from "../InputCharacters";

const FlipBox = styled.div`
  background-color: transparent;
  width: 15rem;
  height: 22.25rem;
  perspective: 1000px;
`

interface FlipBoxInnerProps {
  isFlipped: boolean
  hasError: boolean
}

const FlipBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  ${(props: FlipBoxInnerProps) => props.isFlipped && `transform: rotateY(-180deg);`};
  ${(props: FlipBoxInnerProps) => props.hasError && `
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  
    @keyframes shake {
      10%, 90% {
        transform: translate3d(-1px, 0, 0);
      }
      
      20%, 80% {
        transform: translate3d(2px, 0, 0);
      }
    
      30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
      }
    
      40%, 60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  `};
`

const FlipBoxContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: .25rem;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${(props: { flippedContent?: boolean }) => props.flippedContent && `
    transform: rotateY(180deg);
  `}
`

const InputWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 1.5rem;
  width: 100%;
`

interface FlipProps {
  front: ReactNode | string
  back: ReactNode | string
  flipped: boolean
  correctAnswer: string
  onDone: (word: string) => void
  hasError: boolean
}

const Flip = ({front, back, flipped, correctAnswer, onDone, hasError}: FlipProps) => (
  <FlipBox data-testid='Flip-test-id'>
    <FlipBoxInner isFlipped={flipped} hasError={hasError}>
      <FlipBoxContent>
        {front}
        <InputWrapper>
          <InputCharacters
            numberOfCharacters={correctAnswer.length}
            onDone={onDone}
          />
        </InputWrapper>
      </FlipBoxContent>
      <FlipBoxContent flippedContent>
        {back}
      </FlipBoxContent>
    </FlipBoxInner>
  </FlipBox>
)

export default Flip

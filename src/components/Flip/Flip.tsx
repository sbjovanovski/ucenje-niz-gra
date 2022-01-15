import styled from 'styled-components'
import {ReactNode} from "react";
import InputCharacters from "../InputCharacters";

const FlipBox = styled.div`
  background-color: transparent;
  width: 15rem;
  height: 22.25rem;
  perspective: 1000px;
`

const FlipBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  ${(props: { isFlipped: boolean }) => props.isFlipped && `transform: rotateY(-180deg);`};
`

const FlipBoxContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: .25rem;
  background-color: #f2f2f2;
  cursor: pointer;
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
}

const Flip = ({front, back, flipped, correctAnswer}: FlipProps) => (
  <FlipBox data-testid='Flip-test-id'>
    <FlipBoxInner isFlipped={flipped}>
      <FlipBoxContent>
        {front}
        <InputWrapper>
          <InputCharacters
            numberOfCharacters={correctAnswer.length}
            onDone={(word) => alert(word)}
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

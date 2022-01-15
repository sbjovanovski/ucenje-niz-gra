import styled from 'styled-components'
import {ReactNode, useEffect, useState} from "react";

const FlipBox = styled.div`
  background-color: transparent;
  width: 12.5rem;
  height: 20rem;
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
  background-color: #bbb;
  color: black;
  cursor: pointer;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${(props: { flippedContent?: boolean }) => props.flippedContent && `
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  `}
`

interface FlipProps {
  normalContent: ReactNode | string
  flippedContent: ReactNode | string
  onFlip?: (isFlipped: boolean) => void
}

const Flip = ({onFlip, normalContent, flippedContent}: FlipProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    onFlip && onFlip(isFlipped)
  }, [isFlipped])

  return (
    <FlipBox data-testid='Flip-test-id'>
      <FlipBoxInner isFlipped={isFlipped} onClick={toggleFlip}>
        <FlipBoxContent>
          {normalContent}
        </FlipBoxContent>
        <FlipBoxContent flippedContent>
          {flippedContent}
        </FlipBoxContent>
      </FlipBoxInner>
    </FlipBox>
  )
}

export default Flip

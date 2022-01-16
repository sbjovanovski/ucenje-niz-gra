import styled from "styled-components";
import {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from "react";

const CharactersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: {
    numberOfCharacters: number,
    characterWidth: number
  }) => props.numberOfCharacters + `, ${props.characterWidth}rem`});
  grid-gap: .5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
` as any

const InputCharacter = styled.input`
  height: 2rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid #4a4a4a;
  text-align: center;
  font-size: 1rem;
`
const generateUUID = () => {
  let d = Date.now();

  if (typeof window !== 'undefined' && window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

const CARD_WIDTH = 240

interface InputCharactersProps {
  numberOfCharacters: number
  onDone: (word: string) => void
}

interface Word {
  id: number
  value: string
}

const backSpaceClickCount: { [id: string | number]: number } = {}

const InputCharacters = ({numberOfCharacters, onDone}: InputCharactersProps) => {
  const RANDOM_ID = generateUUID();
  const wrapperRef = useRef<HTMLElement>()
  const [characterWidth, setCharacterWidth] = useState<number>(1.5)
  const [word, setWord] = useState<Word[]>([])

  const updateWord = (character: string, characterId: number) => {
    setWord((prevState) => {
      const wordClone = prevState.slice()
      const wordIndex = wordClone.findIndex(w => w.id === characterId)
      if (wordIndex !== -1) {
        wordClone[wordIndex].value = character
      } else {
        wordClone.push({
          id: characterId,
          value: character
        })
      }
      return wordClone
    })
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>, characterId: number) => {
    const value = event.target.value.trim() || ''
    updateWord(value, characterId)
    if (value) {
      if (characterId + 1 <= numberOfCharacters) {
        document.getElementById(`${RANDOM_ID}-${characterId + 1}`)?.focus()
      }
    }
  }

  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>, characterId: number) => {
    if (event.key === 'Backspace') {
      const value = event.currentTarget.value.trim()
      backSpaceClickCount[`${RANDOM_ID}-${characterId}`] = backSpaceClickCount[`${RANDOM_ID}-${characterId}`] ?
        backSpaceClickCount[`${RANDOM_ID}-${characterId}`] + 1 : 1
      if (characterId - 1 >= 1 && !value && backSpaceClickCount[`${RANDOM_ID}-${characterId}`] > 1) {
        document.getElementById(`${RANDOM_ID}-${characterId - 1}`)?.focus()
        backSpaceClickCount[`${RANDOM_ID}-${characterId}`] = 0
      }
    }
  }

  useEffect(() => {
    const finalWord = word.filter(w => w.value.trim())
    if (finalWord.length === numberOfCharacters) {
      onDone(
        finalWord
          .sort(w => w.id)
          .map(w => w.value)
          .join('')
          .trim()
      )
    }
  }, [word])

  useEffect(() => {
    const parentElementWidth = wrapperRef?.current?.parentElement?.clientWidth || CARD_WIDTH
    setCharacterWidth((parentElementWidth / numberOfCharacters) / 16 - .6)
  }, [])

  return (
    <CharactersWrapper characterWidth={characterWidth} numberOfCharacters={numberOfCharacters} ref={wrapperRef}>
      {Array(numberOfCharacters).fill(0).map((c, i) => (
        <InputCharacter
          key={i + 1}
          type='text'
          maxLength={1}
          id={`${RANDOM_ID}-${i + 1}`}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, i + 1)}
          onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => onKeyUp(event, i + 1)}
        />
      ))}
    </CharactersWrapper>
  )
}

export default InputCharacters

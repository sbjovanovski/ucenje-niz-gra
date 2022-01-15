import * as React from 'react'
import InputCharacters from './InputCharacters'
import {render, screen} from '@testing-library/react'

it('renders without crashing', () => {
  render(<InputCharacters numberOfCharacters={0} onDone={jest.fn}/>)
  expect(screen.getByTestId('InputCharacters-test-id')).toBeInTheDocument()
})

import * as React from 'react'
import Flip from './Flip'
import {render, screen} from '@testing-library/react'

it('renders without crashing', () => {
  render(<Flip front='' back='' flipped={false} correctAnswer={''}/>)
  expect(screen.getByTestId('Flip-test-id')).toBeInTheDocument()
})

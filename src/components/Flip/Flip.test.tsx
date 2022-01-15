import * as React from 'react'
import Flip from './Flip'
import {render} from '@testing-library/react'

it('renders without crashing', () => {
  const {getByTestId} = render(<Flip normalContent='' flippedContent=''/>)
  expect(getByTestId('Flip-test-id')).toBeInTheDocument()
})

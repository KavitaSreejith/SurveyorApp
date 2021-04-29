import React from 'react'
import { render } from '@testing-library/react'
import Loading from './Loading'
import NotFound from './NotFound'
import { renderWithRedux, mockStore } from '../../redux/testHelpers'

test('Loading renders', () => {
    const { getByTestId } = render(<Loading />)
    const linkElement = getByTestId('loading-component')
    expect(linkElement).toBeTruthy()
})

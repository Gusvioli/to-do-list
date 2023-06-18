import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../../pages/Home'

describe('Testando a página Home', () => {
  test('Deve renderizar o título da página', () => {
    render(<Home />)
    const screenHome = screen.getByTestId('form-Login')
    expect(screenHome).toBeInTheDocument()
  })
})

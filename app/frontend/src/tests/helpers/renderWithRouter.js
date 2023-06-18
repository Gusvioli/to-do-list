import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import Provider from '../../context/Provider'

function renderWithRouter(
  component,
  { initialPath = '/', history = createMemoryHistory([initialPath]) } = {},
) {
  return {
    ...render(
      <Provider>
        <Router history={history}>{component}</Router>
      </Provider>,
    ),
    history,
  }
}

export default renderWithRouter

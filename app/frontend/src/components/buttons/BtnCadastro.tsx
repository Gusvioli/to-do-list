import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Context from '../../context/Context'
import codeMenssage from '../../services/status'

function BtnCadastro() {
  const { setCodeStatusMessage } = useContext(Context)
  const history = useHistory()
  return (
    <form>
      <button
        type="button"
        data-testid="button-buscar"
        onClick={() => {
          setCodeStatusMessage({
            status: 0,
            message: '',
          })
          codeMenssage(0)
          history.push('/cadastro')
        }}
      >
        Register
      </button>
    </form>
  )
}

export default BtnCadastro

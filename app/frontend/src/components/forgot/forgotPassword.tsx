import { useContext, useState } from 'react'
import Context from '../../context/Context'
import { requestUpdate } from '../../services/requests'
import { exibirMsgs } from '../utils/msgs/exibirMsgs'
import './styles/forgotPassword.css'
import { useHistory } from 'react-router-dom'

type ForgotType = {
  nameUsed: string
  emailUsed: string
  newPassword: string
  repitNewPassword: string
}

export default function ForgotPassword() {
  const { setCodeStatusMessage, codeStatusMessage } = useContext(Context)
  const [dateForgot, setDateForgot] = useState<ForgotType>({
    nameUsed: '',
    emailUsed: '',
    newPassword: '',
    repitNewPassword: '',
  })

  const history = useHistory()

  const handleForgot = (e: any) => {
    e.preventDefault()
    const { value, name } = e.target
    setDateForgot({ ...dateForgot, [name]: value })
  }

  const handleForgotUpdate = async (e: any) => {
    e.preventDefault()
    try {
      if (dateForgot.newPassword !== dateForgot.repitNewPassword) {
        setCodeStatusMessage({
          status: 400,
          message: 'New password end Repit new password not equals',
        })
      } else {
        const dataPassword = await requestUpdate('/passwordUpdate', dateForgot)
        setCodeStatusMessage({
          status: 200,
          message: dataPassword.message,
        })
        history.push('/login')
      }
    } catch (error: any) {
      setCodeStatusMessage({
        status: error.response.status,
        message: error.response.data.message,
      })
    }
  }

  return (
    <>
      <div className="div-0-form">
        <form className="form-cadastro">
          <div className="form-div-text-cadastro">
            <img
              width={50}
              height={50}
              src="logoToDoList.png"
              alt="Logotipo to do list"
              title="Logotipo to do list"
            />
            <h3>To do list</h3>
            <p>Forgot Password?</p>
          </div>
          <label className="loginLabel" htmlFor="nameUsed">
            <input
              placeholder="Name used"
              type="text"
              id="nameUsed"
              name="nameUsed"
              onChange={(e) => handleForgot(e)}
            />
          </label>
          <label className="loginLabel" htmlFor="emailUsed">
            <input
              placeholder="Email used"
              type="email"
              id="emailUsed"
              name="emailUsed"
              onChange={(e) => handleForgot(e)}
            />
          </label>
          <label className="loginLabel" htmlFor="newPassword">
            <input
              placeholder="New password"
              type="password"
              id="newPassword"
              name="newPassword"
              onChange={(e) => handleForgot(e)}
            />
          </label>
          <label className="loginLabel" htmlFor="repitNewPassword">
            <input
              placeholder="Repit new password"
              type="password"
              id="repitNewPassword"
              name="repitNewPassword"
              onChange={(e) => handleForgot(e)}
            />
          </label>
          <button type="button" onClick={(e) => handleForgotUpdate(e)}>
            Upadete Password
          </button>
          <a
            className="link-login"
            href="/login"
            onClick={() => history.push('/login')}
            title="Go to login"
          >
            Go Login
          </a>
          <a
            className="link-login"
            href="/cadastro"
            onClick={() => history.push('/login')}
            title="Go to login"
          >
            Go Register
          </a>
          <p className={'exibir-msgs'}>{exibirMsgs(codeStatusMessage)}</p>
        </form>
      </div>
    </>
  )
}

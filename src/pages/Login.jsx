import React from 'react'
import { Link } from 'react-router-dom'

function Login(props) {
  console.log(props)
  const { signInWithGoogle, history } = props;

  function handleButtonClick() {
    signInWithGoogle();
    history.push('/')
  }

  return(
    <div>
        <button onClick={handleButtonClick} type="button" className="btn btn-outline-dark">Login</button>
    </div>
  )
}

export default Login;
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return(
    <div>
      Login
      <Link to="/" >
        <button type="button" className="btn btn-outline-dark">Dark</button>
      </Link>

    </div>
  )
}

export default Login;
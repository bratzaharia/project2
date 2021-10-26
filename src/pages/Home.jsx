import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './../layout/Layout'

function Home(props) {
  console.log(props);

  return(
    <Layout>
      <div>
        Home
      </div>
      <Link to="/login">
        Login
      </Link>
    </Layout>
  )
}

export default Home;
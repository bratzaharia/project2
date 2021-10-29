import Header from './../components/Header'
import Footer from './../components/Footer'

function Layout(props) {
  console.log(props)
  const { signOut, user } = props;
  return(
    <div>
      <Header
        signOut={signOut}
        user={user}
      />
        { props.children }
      <Footer />
    </div>
  )
}

export default Layout;
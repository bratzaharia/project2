import Header from './../components/Header'
import Footer from './../components/Footer'

function Layout(props) {
  // console.log(props)
  return(
    <div>
      <Header/>
        { props.children }
      <Footer/>
    </div>
  )
}

export default Layout;
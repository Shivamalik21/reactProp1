
import Header from "./component/header"
import Footer from './component/footer'
import Body from './component/body'

const data = require('./component/quotes');
const Screen = () => {
  return (
   <div style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}><Header/>
  <Body  prop={data} />
  <Footer/>
  </div>
   
  )
}

export default Screen
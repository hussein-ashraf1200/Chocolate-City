import './App.css'
import Navbar from "./componants/Navbar"
import Home from "./componants/Home"
import ProductesAll from './componants/ProductesAll'
import Events from './componants/Events'
import Footer from './componants/Footer'
import Artiacl from './componants/Artiacl'


function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="products">
        <ProductesAll />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="articles">
        <Artiacl />
      </div>
      <Footer />
    </div>
  )
}

export default App

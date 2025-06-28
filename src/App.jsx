import './App.css'
import Header from './components/sections/header'
import Hero from './components/sections/hero'
import PropertiesFav from './components/sections/properties-fav'
import About from './components/sections/about'
import Properties from './components/sections/properties'
import Contact from './components/sections/contact'
import Footer from './components/sections/footer'
import BackgroundHero from './components/ui/backgrondHero/backgroundHero'
function App() {
  return (
    <>
      < Header />
      < BackgroundHero />
      <main className='conteiner-app'>
        < Hero />
        < PropertiesFav />
        < About />
        < Properties />
        < Contact />
      </main>
      < Footer />
    </>
  )
}

export default App

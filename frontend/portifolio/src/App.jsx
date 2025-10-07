
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Home } from './components/home'
import { Projectos } from './components/projectos'
import { QuemSouEu } from './components/quemSouEu'
import { Skills } from './components/skills'
import fundo from "./assets/fundo.jpg"

function App() {
  

  return (
    <>
     <Header/>
     <Home/>
     <Projectos/>
     <QuemSouEu/>
     
         
        <Skills/>
        <Footer/>
     
    </>
  )
}

export default App

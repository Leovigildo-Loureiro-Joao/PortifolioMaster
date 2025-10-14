
import { MySelf } from './components/MySelf'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

import { Footer } from './components/UI/footer'
import { Header } from './components/UI/Header'
import { Home } from './components/UI/home'


function App() {
  

  return (
    <>
     <Header/>
     <Home/>
     <Projects/>
     <MySelf/>
     
         
        <Skills/>
        <Footer/>
     
    </>
  )
}

export default App

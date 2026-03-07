
import { MySelf } from './components/MySelf'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/UI/Contact'

import { Footer } from './components/UI/footer.tsx'
import { Header } from './components/UI/Header'
import { Home } from './components/UI/home.tsx'


function App() {
  

  return (
    <div className="overflow-x-hidden">
     <Header/>
     <Home/>
     <Projects/>
     <MySelf/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App

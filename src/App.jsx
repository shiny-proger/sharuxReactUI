// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage.jsx'
import Components from './pages/Components/Components.jsx'
import Document from './pages/Document/Document.jsx'
import MainMenu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import Buttons from './pages/Components/Buttons/Buttons.jsx'
import Shiny from './pages/shiny/Shiny.jsx'
import Selectors from './pages/Components/Selectors/Selectors.jsx'

function App() {
  return (
    <>
        <MainMenu />
        
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/docs" element={<Document />} />
            <Route path="/components" element={<Components />} />
            <Route path="/shiny" element={<Shiny />} />
            <Route path="/components/buttons" element={<Buttons />} />
            <Route path="/components/selectors" element={<Selectors />} />
            <Route path="*" element={<h1>404 — страница не найдена</h1>} />
        </Routes>
        
        <Footer/>
    </>
  )
}

export default App

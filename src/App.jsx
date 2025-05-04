
import './App.css'
import { ChakraProvider} from '@chakra-ui/react'
import NewNote from './Pages/NewNote'
import Home from './Pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext'
import Navbar from './Componenets/Navbar'

function App() {

  return (
    <>
     <ChakraProvider>
      <ThemeProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<NewNote/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      </ChakraProvider>

    </>
  )
}

export default App

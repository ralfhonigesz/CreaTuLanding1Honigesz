import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title={'Tienda River Plate'} />} />
          <Route path='/categorias/:categoryId' element={<ItemListContainer title={'Tienda River Plate'} />} />
          <Route path='/producto/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App

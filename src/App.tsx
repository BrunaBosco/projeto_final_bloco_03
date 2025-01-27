import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import { ToastContainer } from 'react-toastify'
import FormCategoria from './components/categoria/formcategoria/formCategoria'
import DeletarCategoria from './components/categoria/deletarcategoria/deletarCategoria'
import 'react-toastify/dist/ReactToastify.css';
import ListarCategoria from './components/categoria/listarcategorias/ListarCategoria'

function App() {
  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categoria" element={<ListarCategoria />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import Header from './components/header/Header'
import Body from './components/body/Body'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pacientes from './pages/pacientes/Pacientes'
import Cadastro from './pages/cadastrarpaciente/Cadastro'

function App() {
  return (
    <>
      <Header />
      <div style={{width: "100%", margin: "auto"}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path='/pacientes' element={<Pacientes />}/>
            <Route path='/cadastrar' element={<Cadastro />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

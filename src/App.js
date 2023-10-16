import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cartão from './componentes/cartão'
import Home from './componentes/Home'
import Header from './componentes/header'
import Meio from './componentes/meio'
import Caixa from './componentes/caixa'
import SaibaMais from './Pages/SaibaMais'
import Funciona from './Pages/Funciona'
import Banco from './Pages/Banco'
import Texto from './Pages/Texto'
import Pagamento from './Pages/Pagamento'
import Beneficios from './Pages/Beneficios';
import Ponto from './Pages/Ponto'
import Bem from './Pages/Bem'
import Form from './Pages/Form'
import Formulario from './componentes/Formulario'
import Bem1 from './componentes/Bem1'
import Rodape from './componentes/Rodape';
import Rodape1 from './Pages/Rodape1'
import './App';

function App() {
  return (
    <body>
      <Router>
        <Header />
        <Home />
        <Cartão />
        <Meio />
        <Caixa />
        <Bem1 />
        <Formulario />
        <Rodape />

        <Funciona />
        <Banco />
        <Texto />
        <Pagamento />
        <Beneficios />
        <Ponto />
        <Bem />
        <Form />
        <Rodape1 />

        <Routes>
          <Route path='./Pages' element={<SaibaMais />} />
        </Routes >
      </Router>
    </body>

  )

}


export default App
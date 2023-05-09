import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inscritos from './pages/Inscritos';

function App() {
  const oficinas = [
    {
      nome: 'Amor de Cristo refletido em Missões',
      corPrimaria: '#17a697',
      corSecundaria: '#17a997',
    },
    {
      nome: 'Amor de Cristo refletido em relacionamentos amorosos',
      corPrimaria: '#3791a6',
      corSecundaria: '#3791a6'
    },
    {
      nome: 'Amor de Cristo para com pecadores',
      corPrimaria: '#2b558c',
      corSecundaria: '#2b558c'
    }
  ]

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home oficinas={oficinas}/>} />
        <Route path='/inscritos' element={<Inscritos oficinas={oficinas}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CertifyingFormations from './CertifyingFormations';
import Lang from'./lang';
import FormationsCourtes from './FormationsCourtes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formations" element={<CertifyingFormations />} />
        <Route path="/formations/courtes" element={<FormationsCourtes />} />
        <Route path="/formations/langues" element={<Lang />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
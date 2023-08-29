//import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import OComeco from './OComeco';

function App() {
  useEffect(() => {
    document.title = "Guia de Leitura do Batman";
  }, []);
  
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/OComeco" element={<OComeco />} />
    </Routes>
  </div>
  );
}
 export default App;

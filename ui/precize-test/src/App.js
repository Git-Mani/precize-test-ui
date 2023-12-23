
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import View from './components/view';
import Insert from './components/insert';
import UpdateRecord from './components/updateRecord';
import DeleteRecord from './components/deleteRecord';
import Rank from './components/rank';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Menu />
          <Routes>
          <Route path="/" element={<Insert />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/view" element={<View />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/update" element={<UpdateRecord />} />
            <Route path="/delete" element={<DeleteRecord />} />
          </Routes>
       </header>
      </div>
    </Router>
  );
}

export default App;

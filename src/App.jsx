import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Bbs from './pages/bbs';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/bbs" element={<Bbs />} />
        {/* ここに他のルートも追加できる */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

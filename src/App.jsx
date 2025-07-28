import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import { TodoList }  from './pages/TodoList';
import Bbs from './pages/bbs';
import Weather from './pages/weather';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/bbs" element={<Bbs />} />
        <Route path="/weather" element={<Weather />} />
        {/* ここに他のルートも追加できる */}
      </Routes>
    </Router>
  );
}

export default App;

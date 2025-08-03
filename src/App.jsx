import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import  TodoList  from './pages/TodoList';
import Bbs from './pages/bbs';
import Weather from './pages/weather';
import './App.css'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import  Login  from './components/Login';
import { AuthProvider } from './firebase/AuthContext';

function App() {

  const [user, setUser] = useState(null);

  // 認証状態の監視
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // クリーンアップ
  }, []);

  return (
     <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TodoList" element= {user ? <TodoList user={user} /> : <Login />} />
          <Route path="/bbs" element={<Bbs />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/Login" element={<Login />} />
          {/* ここに他のルートも追加できる */}
        </Routes>
      </Router>
     </AuthProvider>
  );
}

export default App;

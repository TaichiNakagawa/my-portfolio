import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase/firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const baseStyle = {
    position: 'relative',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
  };

  // トップページだけ余白を追加
  const homeStyle = isHome ? { marginBottom: '800px' } : {};

  const navStyle = { ...baseStyle, ...homeStyle };

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('ログアウトエラー:', error);
    }
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link> | <Link to="/TodoList">ToDoリスト</Link> | <Link to="/bbs">掲示板アプリ</Link> | <Link to="/weather">天気アプリ</Link> |
      {user ? (
        <button onClick={handleLogout}>ログアウト</button>
      ) : (
        <Link to="/Login">ログイン</Link>
      )}
    </nav>
  );
}

export default Header;

import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ユーザーのログイン状態を監視
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // クリーンアップ
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // ログアウト後にトップに戻るなど
    } catch (error) {
      console.error('ログアウトエラー:', error);
    }
  };

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/TodoList">ToDoリスト</Link> | <Link to="/bbs">掲示板アプリ</Link> | <Link to="/weather">天気アプリ</Link> |
      {user ? (
        <>
          <button onClick={handleLogout}>ログアウト</button>
        </>
      ) : (
        <Link to="/Login">ログイン</Link>
      )}
    </nav>
  );
}

export default Header;
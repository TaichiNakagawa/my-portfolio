import { auth, provider } from '../firebase/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {user ? (
        <>
          <p>こんにちは、{user.displayName} さん</p>
        </>
      ) : (
        <button onClick={handleLogin}>Googleでログイン</button>
      )}
    </div>
  );
};

export default Login; 
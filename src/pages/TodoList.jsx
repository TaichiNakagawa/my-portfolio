import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../firebase/AuthContext.jsx'; // ログインユーザー取得用

const TodoList = () => {
  const { user } = useAuth(); // ログイン中のユーザー情報
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!user) return;

    const userTodosRef = collection(db, 'todos', user.uid, 'items');

    const unsubscribe = onSnapshot(userTodosRef, (snapshot) => {
      const fetchedTodos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(fetchedTodos);
    });

    return () => unsubscribe();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim() || !user) return;

    const userTodosRef = collection(db, 'todos', user.uid, 'items');
    await addDoc(userTodosRef, {
      text: task,
      completed: false,
    });

    setTask('');
  };

  const toggleComplete = async (todo) => {
    if (!user) return;

    const todoRef = doc(db, 'todos', user.uid, 'items', todo.id);
    await updateDoc(todoRef, {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    if (!user) return;

    const todoRef = doc(db, 'todos', user.uid, 'items', id);
    await deleteDoc(todoRef);
  };

  return (
    <div>
      <h2>{user?.displayName} さんの Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="新しいタスクを追加"
        />
        <button type="submit">追加</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => toggleComplete(todo)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
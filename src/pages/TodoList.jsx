import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase'; 
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Firestoreからリアルタイムでデータを取得
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      const fetchedTodos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(fetchedTodos);
    });

    return () => unsubscribe(); // クリーンアップ
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    await addDoc(collection(db, 'todos'), {
      text: task,
      completed: false,
    });

    setTask('');
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div>
      <h2>Todo List</h2>
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

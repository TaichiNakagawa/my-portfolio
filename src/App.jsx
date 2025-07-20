import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

   return (
    <div className="App">
      <header>
        <h1>中川太一 | フロントエンドエンジニア志望</h1>
        <p>フロントエンドエンジニアを目指してWeb制作・React開発を学んでいます。</p>
      </header>

      <section>
        <h2>制作物一覧（準備中）</h2>
        <ul>
          <li class="list">✅ ToDoアプリ（公開予定）</li>
          <li class="list">✅ 掲示板アプリ（公開予定）</li>
          <li class="list">✅ 天気アプリ（公開予定）</li>
        </ul>
      </section>

      <footer>
        <p>GitHub: <a href="https://github.com/your-account">your-account</a></p>
      </footer>
    </div>
  );
}

export default App

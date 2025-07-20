import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <h1>中川太一 | フロントエンドエンジニア志望</h1>
        <p>フロントエンドエンジニアを目指してWeb制作・React開発を学んでいます。</p>
      </header>

      <section>
        <h2>制作物一覧（準備中）</h2>
        <nav>
          <Link to="/TodoList">✅ ToDoリスト（公開予定）</Link>
          <br />
          <Link to="/bbs">✅ 掲示板アプリ（公開予定）</Link>
          <br />
          <Link to="/weather">✅ 天気アプリ（公開予定）</Link>
        </nav>
      </section>

      <footer>
        <p>GitHub: <a href="https://github.com/TaichiNakagawa">TaichiNakagawa</a></p>
      </footer>
    </div>
  );
}

export default Home;
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/TodoList">ToDoリスト</Link> | <Link to="/bbs">掲示板アプリ</Link> |<Link to="/weather">天気アプリ</Link>
    </nav>
  );
}

export default Header;
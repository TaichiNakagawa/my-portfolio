フロントエンドエンジニアを目指して学習中のポートフォリオサイトです。  
制作物は順次公開予定です。 

学習中に苦労した点
<br>
1.SPAでページ遷移をする方法がわからなかった(トップページの要素を残したままTodoListページに遷移してしまう)→React Routerを使用、タグを外に出して解決
<br>
2.ルーティング用のApp.jsxファイルとトップページ用のHome.jsxファイルを分けたらトップページが真っ白に→App.jsx側でHomeのimport漏れ、Home.jsx側でHomeのexport漏れが原因だった
<br>
3.Todoリストアプリを作成する際、tsxファイルで書くと例えばsetTodos([...todos, { text: task, completed: false }]);で型neverに割り当てることができませんというエラーが発生、jsxファイルに変更することで解決したが根本的にはTypeScriptについての理解が必要
<br>

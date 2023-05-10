// hooksのインポート
import { useEffect,useState, useContext } from 'react';
import './App.css'
// GakeCodeContextをインポート main.jsxのuseContext(GakeCodeContext)を使える
// main.jsx の export default GakeCodeContext; と連動
import GakeCodeContext from './main';

function App() {
  const [count, setCount] = useState(0);
  // Appコンポーネントの中で、useContext(GakeCodeContext)を使ってgakecodeInfoオブジェクトにアクセス。
  const gakecodeInfo = useContext(GakeCodeContext);
  const handleClick = () => {
    setCount(count + 1);
  };
  
  
  useEffect(() => {
    console.log("hello")
    //setCount(count + 1);
  }, [count]);
  
  return (
  <div className='App'>
    <h1>useState, useEffect</h1>
    <button onClick={handleClick}>＋</button>
    <p>{count}</p>

    <hr />
    <h1>useContext</h1>
    {/* gakecodeInfoのname,ageを表示→useContextでmain.jsxと繋がっているから使用可能*/}
    <p>{gakecodeInfo.name}</p>
    <p>{gakecodeInfo.age}</p>
  </div>
  );
};

export default App;
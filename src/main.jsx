// ReactとcreateContextをインポート。createContextは、新しいコンテキストを作成するための関数。
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// gakecodeInfoオブジェクト作成。nameとageはプロパティ。
const gakecodeInfo ={
  name: "gakeppuchi",
  age: 39
};

// createContextを使用して、GakeCodeContextというコンテキスト作成。gakecodeInfoをデフォルト値として指定。
const GakeCodeContext = createContext(gakecodeInfo)

// GakeCodeContext.Providerを使って、gakecodeInfoをコンポーネントツリーに提供。
// propsで1つ1つ渡さなくても、どの階層からでもuseContext(GakeCodeContext)を使ってコンポーネントにアクセルできる。
ReactDOM.createRoot(document.getElementById('root')).render(
  <GakeCodeContext.Provider value = {gakecodeInfo}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GakeCodeContext.Provider>
);

// GakeCodeContextをエクスポート。これにより、他のコンポーネントでuseContext(GakeCodeContext)を使ってこのコンテキストにアクセスできる。
export default GakeCodeContext;

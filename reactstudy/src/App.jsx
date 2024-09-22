import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  // ボタン押下時の関数
  const onClickButton = () => {
    alert("動作確認")
  }

  return (
    <>
    <h1 style={{color: "red" }}>Hello World</h1>
    <ColorfulMessage />
    <button onClick={onClickButton}>ボタン</button>
    </>
  ); 
}

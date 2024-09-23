import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);  // ボタン押下時の関数
  const onClickButton = () => {
    setNum((prev) => prev + 1)
    setNum((prev) => prev + 3)
  }

  return (
    <>
    <h1 style={{color: "red" }}>Hello World</h1>
    <p style={{fontSize: "50px"}}>Digital Nature</p>
      <ColorfulMessage color = "yellow" message = "ナラッキー" />
      <ColorfulMessage color = "green" message = "O'Reilly" />
    <button onClick={onClickButton}>カウントアップ</button>
    <p>{num}</p>
    </>
  ); 
}

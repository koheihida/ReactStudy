import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0); 
  const [isShowFace, setIsShowFace] = useState(false);
  // ボタン押下時の関数
  const onClickButton = () => {
    setNum((prev) => prev + 1);
  }

  useEffect(() =>{
    if (num > 0) {
      if (num % 3 == 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num])



  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  }
  return (
    <>
    <h1 style={{color: "red" }}>Hello World</h1>
    <p style={{fontSize: "50px"}}>Digital Nature</p>
      <ColorfulMessage color = "yellow" message = "ナラッキー" />
      <ColorfulMessage color = "green" message = "O'Reilly" />
    <button onClick={onClickButton}>カウントアップ</button>
    <p>{num}</p>
    <button onClick={onClickToggle}>on/off</button>
    {isShowFace &&  <p>( ◠‿◠ )</p>}

    </>
  ); 
}

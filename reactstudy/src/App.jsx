export const App = () => {
  // ボタン押下時の関数
  const onClickButton = () => {
    alert("動作確認")
  }
  // pタグ用のCSS
  const pStyle = {
    fontSize : "50px",
    color: "blue"
  }
  return (
    <>
    <h1 style={{color: "red" }}>Hello World</h1>
    <p style={pStyle}>Digital Nature</p>
    <button onClick={onClickButton}>ボタン</button>
    </>
  ); 
}

export const App = () => {
  const onClickButton = () => {
    alert("動作確認")
  }
  return (
    <>
    <h1>Hello World</h1>
    <p>Digital Nature</p>
    <button onClick={onClickButton}>ボタン</button>
    </>
  ); 
}

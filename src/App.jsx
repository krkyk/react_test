import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

/**
 * コンポーネント名はパスカルケースで命名
 * jsを{}内に書く
 * cssはオブジェクトで書くことができる
 * ↑値が文字列なことに注意
 */
const App = () => {
  const onClickButton = () => alert();

  return (
    <React.Fragment>
      <h1 style={{ color: "pink" }}>Hello!</h1>
      <ColorfulMessage color="blue">This is React exercise.</ColorfulMessage>
      <ColorfulMessage color="green">Oh, yeah!</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;

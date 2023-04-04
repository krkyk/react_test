import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

/**
 * コンポーネント名はパスカルケースで命名
 * jsを{}内に書く
 * cssはオブジェクトで書くことができる
 * ↑値が文字列なことに注意
 */
const App = () => {
  // コンポーネントが持つ状態を定義　useState
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUpButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 関心の分離　useEffect
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "pink" }}>Hello!</h1>
      <ColorfulMessage color="blue">This is React exercise.</ColorfulMessage>
      <ColorfulMessage color="green">Oh, yeah!</ColorfulMessage>
      <button onClick={onClickCountUpButton}>カウントアップボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)/</p>}
    </React.Fragment>
  );
};

export default App;

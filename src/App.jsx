import logo from './logo.svg';
import './App.scss';

import { CssModules } from "./components/CssModules";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";

function App() {
  return (
    <>
      {/* <CssModules /> */}
      {/* ↑利用不可 */}
      <StyledComponents />
      <Emotion />
      <TailwindCss />

      {/* cssをそのまま使用するケース */}
      <div className="article">
        <h1 className="title">cssをそのまま使用するケース</h1>
        <p className="honbun">
          これは本文です。
          <br />
          今日の天気は晴れです。
          <br />
          昨日の天気は雨でした。
          <br />
          一昨日の天気は雷でした。
          <br />
          明日の天気は曇りの予報です。
        </p>
        <button className="ok-button">OK</button>
      </div>
      {/* Tailwind CSSを使用するケース */}
      <div className="m-20">
        <h1 className="mb-10 text-xl font-bold">
          Tailwind CSSを使用するケース
        </h1>
        <p className="mb-10 text-gray-500">
          これは本文です。
          <br />
          今日の天気は晴れです。
          <br />
          昨日の天気は雨でした。
          <br />
          一昨日の天気は雷でした。
          <br />
          明日の天気は曇りの予報です。
        </p>
        <button className="px-6 py-2 bg-green-300">OK</button>
      </div>
    </>
  );
}

export default App;

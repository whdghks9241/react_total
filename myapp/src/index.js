import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Count from './js/Count';
import reportWebVitals from './reportWebVitals';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImageChange from './js/ImageChange';
import ObjectExample from './js/ObjectExample';
import OldComponent from './js/OldComponent';
import Animal from './js/Animal';
import TimerCount from './js/TimerCount';
import ExampleCallback from './js/ExampleCallback';
import PreticeTwo from './js/PreticeTwo';
import Board from './js/Board';
import HelloWorld from './js/JSXEaxm';
import TagExam from './js/TagExam';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/*<ToggleButton />*/}
    {/*<IndexExample />*/}
    {/*<Count />*/}
    {/* <ImageChange /> */}
    {/* <ObjectExample /> */}
    {/* <OldComponent /> */}
    {/* <Animal /> */}
    {/* <TimerCount /> */}
    {/* <ExampleCallback /> */}
    {/* <PreticeTwo /> */}
    {/* <Board /> */}
    {/* <HelloWorld /> */}
    <TagExam />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// React.StrictMode : react 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구
// reportWebVitals : react 성능 측정하기 위한 메서드

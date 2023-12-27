import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
/*
  useState : 상태를 관리하기 위해 사용되는 코드
  사용법 : 배열형식으로 사용을 하며, 첫번째 배열은 현재 상태값 두번째 배열은 상태 업데이트 하는 값 을 작성한다.
*/

function App() {
  return (
    <div>
    <Counter />
  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

// const [count, setCount]  = useState(0);
function Counter() {
  // 자바스크립트 코드 작성하는 공간
  // [초기값, 변경될 값] = 초기값 설정해주는 공간
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1)
  }

  return( // html 테그 코드는 return 안에 작성해 줌
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increament}>증가시키는 버튼</button>
    </div>
    // 순수 자바스크립트에서는 onclick C를 소문자로 작성했지만
    // 리액트자바스크립트 에서는 onClick C를 대문자로 활용하는 카멜케이스를 사용함
  )
}


export default App;



import logo from './logo.svg';
import './App.css';

// js 에서는 글자값인지 숫자값인지 중요하지 않음
// 재사용이 가능한지 불가능한지가 중요

// var    : 재할당 재선언 가능 - 밑에서 안된 error 예제 모두가능
// let    : 재선은은 불가능하지만 재할당은 가능
let count = 0;
count = 1;
// const  : 재선언, 재할당 불가 /  한번 선언하면 다시 값을 변경하거나 수정할 수 없음
const msg = "hihji";
// msg = "aa"; - msg에 다른값을 재 할당 할경우 에러가 발생

function HiComponent() {
  return (
    <div>
      <h1>{msg}</h1>
      <p>이것은 Hi 컴포넌트입니다</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>안녕 React</h1>
      <p>이것은 React 입니다</p>
      <h2>{HiComponent()}</h2>
    </div>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  );
}

export default App;

/*
    export default
  다른 파일에서 사용할수 있도록 내보내는 부분
  기본적으로 내보낼 항목을 지정하는 역할을 함
  다른 JS에서 App.js에 있는 function App을 사용할 수 있도록 내보내기도 하지만
  App.js 에서 기본으로 사용할 항목을 지정하기도 함




*/

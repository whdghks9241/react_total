import React, {useState} from 'react';
import img from '../img/Cat.jpeg';

// 증가시키는 함수
function AddCount() {

    //useState를 활용해서 값 증가하는 함수를 완성할 것
// 자바스크립트 코드 작성하는 공간
  // [초기값, 변경될 값] = 초기값 설정해주는 공간
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1)
  }

  return( // html 테그 코드는 return 안에 작성해 줌
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increament} >증가시키는 버튼</button>
      <img src={img }  className="App-logo"  alt="logo"/>

    </div>
    // 순수 자바스크립트에서는 onclick C를 소문자로 작성했지만
    // 리액트자바스크립트 에서는 onClick C를 대문자로 활용하는 카멜케이스를 사용함
  )
}

function Count() {
    return (
        <div>
            <AddCount/>
            
        </div>
    )
}

export default Count;
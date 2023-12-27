import React, {useState, useEffect} from 'react';
import './App.css';

const TodoList = () => {

  // 초기값을 todos에 빈배열로 생성
  // todos는 할 일 목록 들을 저장하는 공간
  const [todos, setTodos] = useState([]);

  // newTodo 새로운 할 일을 추가 작성할 수 있는 공간
  const [newTodo, setNewTodo] = useState('');

  // 할일이 추가될 때마다 추가할 수 있는 const 생성
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      // setTodo([...todos, newTodo]) 현재 입력되어 있는 할 일 목록 배열인 todos를 복사해서 복사한 todos에 새로운 할일인
      // newTodo를 배열에 추가한 후 할 일 목록 설정에 newTodo가 추가된 목적으로 최종 설정하주기 위한 setTodos
      setTodos([...todos, newTodo]);

      // 저장된 할일 목록을 초기화 시켜주기 위해 setNewTodo를 초기화 시켜줌
      setNewTodo('');
    };
  }
  // 할 일을 삭제할 때마다 삭제할 수 있는 const 생성
  const removeTodo = (index)=> {
    // 현재 할 일 목록 배열을 복사ㄴ
    const updateTodos = [...todos];

    // 복사된 배열에서 지정된 자리값(index)를 1개 제어하고 가겠다는 의미
    // updateTodos : 복사된 배열
    // splice : 제거
    updateTodos.splice(index, 1); 
    // 제거하고 싶은 할 일을 제거한 후 setTodos를 활용해서 할일 목록을 재설정
    setTodos(updateTodos);
 
  };

  useEffect(() => {
    console.log('todos 변경됨 : ', todos)
  }, [todos]);

  return (
    <div>
      <h2>useState 활용한 할 일 추가하기</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>삭제하기</button>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default TodoList;

/*
my-app
map 배열 객체 메서드
  배열의 각 요소에서 함수를 호출하고 , 그함수의 반환값으로 새로운 배열을 생성
  예제코드 :
    const newArray = array.map((value, index, erray) => {});
    value : 현재 배열안에 있는 배열의 요소
    index : 배열 안에 있는 자리 값
    array : 배열의 원본
    반환값 : 새로운 배열에서 해당하는 인덱스에 들어갈 값

    {todos.map(todo, index) => (
      key = {index} map 함수로 요소를 생성할떄 각 요소에 고유한 key값을 지정
      react 각 값에[ 대한 번호를 부여함으로 써 목록을 부여된 번호로 추적하기 위해 사용됨]
      <li key = {index}> 
      
        {todo}
        <button onClick={() => removeTodo(index)}>삭제하기</button>
      </li>
    )}
    array,map((요소, 자리값, 만약 새로운 배열이 필요하다면 배열 값 넣어줌) => {
      // 리턴값으로 새로운 배열을 구성
    });
 */

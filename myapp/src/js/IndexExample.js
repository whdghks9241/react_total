import React, {useState} from 'react';

function IndexExample() {
    // 빈 글자를 나타낼 때 '', "" 상관 없이 사용할 수 있음
     const [inputText, setInputText] = useState('');
 
     const handleChange = (e) => {
         setInputText(e.target.value);
     }
 
     return(
         <div>
             <input type="text" 
                     value={inputText} 
                     onChange={handleChange}/>
             <p>내가 작성한 글 :{inputText}</p>
         </div> 
     )
 }

 export default IndexExample;
 
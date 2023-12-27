axios
    javascript나 react에서 http 요청을 수행하기 위한 라이브러리
    주로 웹서버와 통신, API호출, 데이터가져오기 작업에 사용

사용법
    npm install axios / yarn install axios

Axios를 활용해서 API GET 요청
axios.get("https://jsonplaceholder.typicode.com/todos")
    
    axios.get로 데이터를 가져오는데 성공한다면 then을 사용해서 응답받은 데이터를 처리한다.
    응답을 받을 때는 response로 서버에서 받은 응답을 표시하며 reponse가 실제로 요청에 관한 정보와 서버에서 실제로 반환된 데이터를 표여줌
    response를 활용해서 전달받은 데이터를 업데이트 해서 화면에 보여주기 위해 setData를 활용
    .then(response => { setData(response.data); })

    데이터를 가져오는데 실패할경우 catch문을 활용해서 에러를 표시
    에러를 표기할 때는 console.log를 활용해서 개발자들 간에 보여질수 있도록 표기error는 변수명일 뿐 error가 아닌 다른변수명으로 받고싶다면 변수명을 변경해서 표기해도 좋음
    .catch(error => { "", error });
text-light : 글자색 흰색으로 설정

py-5
py : padding-y
y : 위 아래 여백을 조정하는 값
x : 좌 우 여백을 조정하는 값(px)
부트스크랩에서 패딩을 상화좌우 주고싶다면  px와 py를 같이 사용
BootStrap : 여백의 크기를 1 ~ 5 까지 5단계

bg-dark : 
bg : background 배경색
-dark : 검정

container : 본문을 담을 컨테이너를 생성
mt-4 : mt는 margin-top을 나타냄
margin-top 본 문에 위 크기를 조정하는 것
-4는 상단 마진을 4단위로 설정하겠다는 것

row : 컬럼을 나열하는데 사용 

col-md-6
col : column 컬럼의 약자
md : medium 중간 화면 크기
-6 : 6개의 컬럼을 차지
1줄의 컬럼은 12개로 구성되어있음

img-fluid : 이미지를 반응형으로 보여질 수 있게 함
 부모 요소 크기에 맞게 알아서 조절하며, 더 작은 화면에서도 이미지가 깨지지않고 적절히 표현될 수 있도록 유지해줌
 모바일과 태블릿 유용하게 사용하는 태그

Card : 정보를 시각적으로 보여주는데 사용
    card-body : 카드의 내용을 감싸는 부분
                텍스트, 이미지와 같은 내용을 담는 공간
    card-text : 카드에서 일반적인 텍스트 내용을 나타냄
    card-title : 카드에서 제목을 나타냄

form-label : 폼 라벨은 사용자에게 입력하는 공간에 어떤 정보를 입력해줘야하는지 알려주는 텍스트 라벨용

 form-control : 부트스트랩 스타일 맞게 스타일링 된 폼

주로 입력필드에서 많이 사용 텍스트입력, 이메일입력, 패스워드 입력 등에 사용

aria-describedby : 웹에서 label과 input에 설명요소를
지정할 때 사용
따로 small p 와 같은 태그를 걸어서 id값으로 연결지어 사용
rows : 열의 크기값
btn : button 의 약자
btn-primary : css 규격을 사용하는 곳은 대부분 primary 말을
    파란색 계열로 지정해서 사용하고 있음

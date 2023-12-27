import React, {useState} from 'react';

import image1 from '../img/Cat.jpeg';
import image2 from '../img/img2.png';
import image3 from '../img/img4.png';

function ImageChange () {

    // 초기 이미지 경로는 ../img/Cat.jpeg로 설정되어 있는 image1으로 초기 이미지 설정
    const [imageSrc, setImageSrc] = useState(image1);
    const [isClick, setIsClick] = useState(1);

    /*
    
        == 동등 연산자로 자동으로 형 변환을 수행하기 떄문에 데이터 타입이 다를 경우에도 변환을 일부 시도하기도 함
        === 일치연산자로 값과 데이터 타입이 모두 같아야지 trye를 반환함
    
    */ 
    // 이미지를 클릭할 때마다 이미지가 변경될 수 있도록 클릭 함수 만들기
    const handleClick = () => {
        if (isClick === 1) {
            setImageSrc(image2)
            setIsClick(2);
        } else if (isClick === 2) {
            setImageSrc(image3)
            setIsClick(3);
        }else if (isClick === 3) {
            setImageSrc(image1)
            setIsClick(1);
        }
    }

    return (
        <div>
            <img src={imageSrc} onClick={handleClick}/>
        </div>
    )
}

export default ImageChange;
import React from 'react'
import { useContext } from 'react'

// ContextBox, ContextText 두 개의 컴포넌트
// ContextBox(부모) - ContextText(자식) 관계

// Context의 값을 가져오기 위해서 Context 호출
import ThemeContext from '../context/ThemeContext';

export default function ContextBox() {
    return (
        <div>
            <ContextText></ContextText>
        </div>
    )
}

// 값을 가져오고자 하는 위치
function ContextText () {
    // useContext(ThemeContext)를 가져와서 출력하기
    const color = useContext(ThemeContext);

    return <p>{color}</p>
}
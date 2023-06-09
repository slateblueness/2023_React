import React from 'react'

// 버튼을 클릭했을 때 다른 페이지로 이동하면서 값 전달
// useNavigate 사용

import { useNavigate } from 'react-router-dom'

export default function NavigatePage() {
    const navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    // navigate()의 두 번째 인자값으로는 객체 형태가 들어감
                    // 값을 전달하기 위해 state: 사용
                    // state에 전달할 내용이 많다면 객체 형태로 묶어서 전달
                    navigate(`/navigate/state`, {state: 10})
                }}
            >숫자값 10 전달</button>
        </div>
    )
}

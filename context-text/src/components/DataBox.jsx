import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { useState } from 'react';

export default function DataBox() {
    return (
        <div>
            <DataText/>
        </div>
    )
}

function DataText(){
    // 값을 불러올 때는
    // useContext()와, () 안에 작성한 Context 이름을 불러와서 사용
    const value = useContext(DataContext);

    // input 태그의 값 받아와서 input에 저장
    // 버튼을 눌렀을 때 Context에 있는 이름이 바뀌게 작성
    const [input, setInput] = useState();

    // value값이 null 또는 값으로 출력
    // null일 때: 결과값이 false이므로 값을 출력하지 않게 하고
    // 어떤 값일 때: 결과값이 true이므로 해당 값을 출력하도록
    return(
        <div>
            {value && <h3>{value.state.name}</h3>}

            <input
                type="text"
                onChange={(e) => {setInput(e.target.value)}}
            />

            <button
                onClick={() => {value.action.setName(input)}}
            >
                버튼을 누르면 name 수정
            </button>
        </div>
    )
}
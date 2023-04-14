import React from 'react'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { useState } from 'react';

// DataPrint 컴포넌트에서
// DataContext를 받아와서 name을 수정할 수 있게 만들기
export default function DataPrint() {
    const value = useContext(DataContext);
    const {action} = value;
    const [input, setInput] = useState();

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={() => {action.setName(input)}}
            > 
                버튼을 누르면 DataBox에 출력되는 값이 수정됨
            </button>
        </div>
    )
}

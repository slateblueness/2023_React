import React from 'react'
import data from '../data/dummy.json'

import { useState } from 'react'
import { Link } from 'react-router-dom';

// json을 이용한 데이터를 들고 와서 목록 출력

export default function BoardList() {
    const [dataList, setDataList] = useState(data);
    // useState에 넣어서 사용하면 dataList에 있는 내용을 수정 가능하다!

    return (
        <div>
            <h3>BoardList</h3>
            <ul>
                {
                    dataList.map((data) => (
                        <li key={data.id}>
                            <Link to={`/boardlist/${data.id}`}>
                                {data.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

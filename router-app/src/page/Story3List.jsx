import React from 'react'

// Link, Outlet 기능을 사용하기 위해 import
import { Link, Outlet } from 'react-router-dom'

// 배열 리스트를 이용하여 화면 출력
export default function Story3List() {
    const colors = ["black", "pink", "blue"]

    return (
        <div>
            <h3>Story3 List</h3>

            {/* 연습) colors의 map을 사용하여
              * /story3/black, /story3/pink, /story3/blue로 이동하는 Link 작성 */}
            {
                colors.map((color, i) => (
                    <Link to={`/story3/${color}`} key={i}>| {color} Story3 |</Link>
                ))
            }

            <Outlet/>
        </div>
    )
}

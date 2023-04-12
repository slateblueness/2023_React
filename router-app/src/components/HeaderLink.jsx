import React from 'react'

import { Link } from 'react-router-dom'

// 링크들을 모아서 헤더에 고정
export default function HeaderLink() {
    const fruit = "apple";

    return (
        <div>
            {/* <Link></Link>태그를 이용하면
            화면에 다른 컴포넌트의 주소로 이동할 수 있는 링크 생성 가능
            a태그를 대신해서 사용하기에 적합 */}
            <Link to='/about'>About</Link>

            {/* to의 속성값으로 자바스크립트의 문자열 사용 가능 */}
            <Link to={`/story/${fruit}`}>Story</Link>

            <Link to='/articles'>Articles</Link>

            <Link to='/story2'>Story2</Link>

            <Link to='/story3List'>Story3 List</Link>
        </div>
    )
}

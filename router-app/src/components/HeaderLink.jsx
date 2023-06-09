import React from 'react'

import '../css/headerlink.css'

import { Link, NavLink } from 'react-router-dom'

// 링크들을 모아서 헤더에 고정
export default function HeaderLink() {
    const fruit = "apple";

    return (
        <div>
            {/* <Link></Link>태그를 이용하면
            화면에 다른 컴포넌트의 주소로 이동할 수 있는 링크 생성 가능
            a태그를 대신해서 사용하기에 적합 */}

            <NavLink
                className={({isActive}) => isActive ?("link-style") :(undefined)}
                to='/about'
            >
                About
            </NavLink>

            {/* to의 속성값으로 자바스크립트의 문자열 사용 가능 */}
            <NavLink 
                to={`/story/${fruit}`}
                className={({isActive}) => isActive ?("link-style") :(undefined)}
            >
                Story
            </NavLink>

            <NavLink
                to='/articles'
                className={({isActive}) => isActive ?("link-style") :(undefined)}
                // NavLink 태그 안에 end를 입력하면 주소가 완전히 일치할 때만 className을 추가해서 스타일 적용
                end
            >
                Articles
            </NavLink>

            <Link to='/story2'>Story2</Link>

            <Link to='/story3List'>Story3 List</Link>

            <Link to='/navigate'>Navigate</Link>
        </div>
    )
}

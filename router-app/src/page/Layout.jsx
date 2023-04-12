import React from 'react'
import HeaderLink from '../components/HeaderLink'
import { Outlet } from 'react-router-dom'

// 중첩 라우트를 이용해 웹 페이지의 레이아웃 작성
export default function Layout() {
    return (
        <div>
            <HeaderLink/>
            <Outlet/>

            <footer>
                푸터입니다.
            </footer>
        </div>
    )
}

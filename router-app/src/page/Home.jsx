import React from 'react'

// Link를 통해서 react-router-dom에서 지정한 주소로 이동
import { Link } from 'react-router-dom'
import FormComp from '../components/FormComp';
import Story3List from './Story3List';

export default function Home() {
    const fruit = "apple";
    const fruits = ["apple", "orange", "peach"]

    return (
        <div>
            <h1>Home</h1>
            <p>현재 화면은 Home입니다.</p>

            {/* <Link></Link>태그를 이용하면
                화면에 다른 컴포넌트의 주소로 이동할 수 있는 링크 생성 가능
                a태그를 대신해서 사용하기에 적합 */}
            <Link to='/about'>About</Link>
            {/* to의 속성값으로 자바스크립트의 문자열 사용 가능 */}
            <Link to={`/story/${fruit}`}>Story</Link>
            <hr />

            <Link to='/articles'>Articles</Link>

            <hr />
            {/* 쿼리스트링 값을 About에 전달하는 컴포넌트 */}
            <FormComp/>

            {/* map을 이용해서 배열의 값을 Link의 to 주소값으로 사용 */}
            {
                fruits.map((f, index) => (
                    <Link to={`/story/${f}`} key={index}>| {f} Story |</Link>
                ))
            } <hr />

            {/* fruits의 map을 사용하여
              * /story2/apple, /story2/orange, /story2/peach로 이동하는 Link 작성 */}
            {
                fruits.map((f2, index2) => (
                    <Link to={`/story2/${f2}`} key={index2}>| {f2} Story2 |</Link>
                ))
            }
        </div>
    )
}
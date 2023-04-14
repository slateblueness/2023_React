import React from 'react'

// context의 값을 사용하고자 하는 공간에 작성한 ThemeContext 컴포넌트를 가져옴
import ThemeContext from '../context/ThemeContext'
import ObjectContext from '../context/ObjectContext';
import DataContext from '../context/DataContext';

import { useContext } from 'react';

export default function Toolbar(props) {
    return (
        <div>
            {/* 클래스형 컴포넌트 */}
            <ThemedButton/>
            <br/>
            {/* 함수형 컴포넌트 */}
            <MyButton/>
        </div>
    )
}

// 클래스형 컴포넌트로 전달
class ThemedButton extends React.Component {
    // 클래스형 컴포넌트에서 context값을 사용하기 위해서는
    // import해 온 ThemeContext값을 contextType에 가지고 와서 사용
    static contextType = ThemeContext;

    render() {
        return <button>클래스형에서 가져온 Context: {this.context}</button>
        // this.context를 통해서 호출
        // this.context에는 App.js에서 Provider를 통해 value로 전달한 값이 들어가 있다
    }
}

// 함수형 컴포넌트로 전달
function MyButton(props){
    // useContext를 통해 App.js에서 Provider를 통해 value로 전달한 값을 받아올 수 있다
    // useContext를 const하는 이름은 자유롭게 생성 가능
    const context = useContext(ThemeContext);

    // 객체로 전달된 값은 객체로 사용
    // {name: "홍길동", login: true} 객체의 내용이 user에 들어간 상태
    const user = useContext(ObjectContext);

    return <div>
        <h3>{context}</h3>
        { 
            user && <button>{user.name}의 버튼입니다</button>
        }
    </div>
}
import React from 'react'

// context의 값을 사용하고자 하는 공간에 작성한 ThemeContext 컴포넌트를 가져옴
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react';

export default function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    )
}

// 클래스형 컴포넌트로 전달
class ThemedButton extends React.Component {
    // 클래스형 컴포넌트에서 context값을 사용하기 위해서는
    // import해 온 ThemeContext값을 contextType에 가지고 와서 사용
    static contextType = ThemeContext;

    render() {
        return <MyButton theme={this.context} /> // this.context를 통해서 호출
    }
}

// 함수형 컴포넌트로 전달
function MyButton(props){
    // ThemeContext의 값 받아오기
    // useContext를 통해서 값을 받아올 수 있다
    // useContext를 const하는 이름은 자유롭게 생성 가능
    const context = useContext(ThemeContext);

    return <button>{context}의 버튼입니다.</button>
}
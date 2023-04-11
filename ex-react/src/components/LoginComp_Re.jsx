import React, { Component } from 'react'

export class LoginComp_Re extends Component {
    // 첫 번째 순서: state값 설정(=객체 만들기)
    constructor(props){
        super(props);
        this.state = {
            name: "성지연",
            age: 25
        }
    }

    render() {
        // state에서 설정한 값을 render 안에서 쉽게 사용하기 위해 변수로 선언
        const {name, age} = this.state;

        return (
        <div>
            개인 정보: {name}, {age}
        </div>
        )
    }
}

export default LoginComp_Re
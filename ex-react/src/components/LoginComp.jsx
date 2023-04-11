import React, { Component } from 'react'

export class LoginComp extends Component {
    // state값 만들기(객체 만들기)
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            login: false
        }
    }

    // 메소드 만들기
    inputChange = (e) => {
        this.setState({userName: e.target.value})
    }

    loginMethod = () => {
        this.setState({login: true})
    }

    render() {
        const {userName, login} = this.state;

        return (
        <div>
            {/*
            * style보다는
            * className={login ?("on") :("")}처럼
            * 클래스 네임을 이용해서 디자인을 추가하는 것이 더 좋음
            */}
            <h1
                // 아래처럼 style을 사용하여 작성할 수도 있다!
                // but className을 이용하는 것이 더 간단하다
                style={login ?({display: 'block'}) :({display: 'none'})}
            >
                사용자 이름: {userName}, {login ?("로그인 성공") :("false")}
            </h1>

            <div
                style={{display: login ?("none") :("block")}}
            >
                <h3>이름을 입력하세요.</h3>

                <input
                    type="text"
                    onChange={this.inputChange}
                />

                <button
                    onClick={this.loginMethod}
                >
                    확인
                </button>
            </div>
        </div>
        )
    }
}

export default LoginComp
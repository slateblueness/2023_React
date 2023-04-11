import React, { Component } from 'react'

export class EventComp2 extends Component {
    // state값 만들기
    constructor(props){
        super(props);
        this.state = {
            color: "",
            name: "홍길동",
            input: "",
            inputNickname: "",
            inputBook: "",
        }
        
        // 메소드에 .bind로 this를 전달
        this.changeColor = this.changeColor.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    // 메소드 만들기
    // this.setState를 통해서 컬러값을 수정
    changeColor(e){
        // e(이벤트 객체)를 들고 와서 e.type을 통해 이벤트 구분 가능
        // e.type: 해당 이벤트의 타입을 의미 ex) click, MouseEnter 등등
        // 이벤트의 type에 따라서 setState에 값을 각각 다르게 수정할 수 있음
        // onMouseLeave에 changeColor를 추가하여
        // onMouseLeave 이벤트가 발생했을 때 color: ""으로 들어가도록 연습
        if(e.type === "mouseenter"){
            this.setState({color: "red"});
        } else if(e.type === "mouseleave"){
            this.setState({color: ""});
        }
        console.log(e.type);
    }
    
    // 화살표 함수를 가지는 메소드 만들기
    // 화살표 함수를 가지는 메소드는 bind로 this를 연결할 필요 없이 바로 사용 가능
    // 메소드 이름에 화살표 함수 작성
    arrowPrint = () => {
        console.log("이벤트 실행");
        console.log(this.state.name);
    }
    
    changeName = () => {
        this.setState({name: "성춘향"});
    }

    // onChange 공용 메소드 작성
    onInputChange = (e) => {
        // setState({inputNickname: e.target.value})를 그대로 사용하게 되면
        // inputNickname에만 값이 들어가는 문제점 발생
        // e.target.name으로 name속성값을 가져와서 사용함으로 문제 해결 → 오류 발생
        // 왜? setState({A: B}) A에 들어가는 건 반드시 변수값이어야 함
        // e.target.name은 변수값이 아니기 때문에 오류가 발생한 것
        // 변수값을 사용하려면 []에 담아서 사용해야 함!
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const {name} = this.state;

        return (
        <div>
            <p
                onMouseEnter={this.changeColor}
                onMouseLeave={this.changeColor}
                style={{color: this.state.color}}
            >
                p태그에 마우스를 올리면 글자를 빨간색으로 바꾸기
            </p>

            {/* 화살표 함수로 메소드 만들어서 사용하기 위한 밑그림 */}
            <button
                onClick={ () => {
                    console.log("이벤트 실행");
                    console.log(this.state.name);
                }}
            >
                화살표 함수를 사용한 이벤트
            </button>

            {/* 화살표 함수를 이용해서 버튼을 클릭했을 때 name값을 성춘향으로 변경 */}
            <button
                onClick={this.changeName}
            >
                {name}
            </button>

            {/* form - input태그값 사용하기 */}
            <h3>onChange를 사용해서 input태그에서 가져올 state를 수정</h3>
            <p>{this.state.input}</p>
            <input
                type="text"
                onChange={(e) => {
                    console.log(e.target.value);
                    this.setState({input: e.target.value});
                    // setState는 비동기로 움직이기 때문에
                    // 바로 state에 접근해서 값을 출력하면 이전값이 출력된다
                    console.log("input", this.state.input);
                }}
            />

            {/* change 공용 함수 만들기(필요에 따라 공용 함수로 사용 가능) */}
            <h3>input 2개에서 값을 받아오기</h3>
            <p>inputNickname의 값: {this.state.inputNickname}</p>
            <input
                // name은 state의 속성 이름과 동일하게 부여
                name = "inputNickname"
                type="text"
                onChange={this.onInputChange}
            />

            <p>inputBook의 값: {this.state.inputBook}</p>
            <input
                name = "inputBook"
                type="text"
                onChange={this.onInputChange}
            />
        </div>
        )
    }
}

export default EventComp2
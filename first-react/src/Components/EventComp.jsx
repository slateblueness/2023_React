import React, { Component } from 'react'

export class EventComp extends Component {
    // state값을 선언할 때에는 constructor 안에 작성
    constructor(props){
        super(props);
        this.state = {
            name: "홍길동",
            address: "부산",
            toggle: true
        }

        // 메소드에 .bind로 this를 전달
                        // ↓ this.printEvent는 작성한 메소드
                        // 그 메소드에 .bind(this)로 this 연결
        this.printEvent = this.printEvent.bind(this);
        // this.printEvent라는 이름 안에 등호 우측의 값을 집어 넣는다!
        // ex) let num = 0; num = num+1; → num의 결과는 1

        this.printAddress = this.printAddress.bind(this);
        this.setToggle = this.setToggle.bind(this);
    }

    // 메소드 만들기
    // 이벤트 안에서 작성한 함수를 그대로 들고 와서 메소드로 사용할 수 있다
    // but, render에서 정의한 값을 사용할 수 없다
    // this.state.name을 통해서 접근해야 name 속성을 사용 가능
    // 메소드에 바로 bind를 통해서 this를 묶어 줄 수 없다
    // ☆메소드만 만들어서 바로 사용하면 this를 찾지 못하기 때문에 오류가 발생☆
    // 해결 방법: constructor에서 bind로 묶어서 사용하기
    printEvent(){
        console.log("이벤트 출력");
        console.log(this.state.name);
    }

    printAddress(e){
        console.log(this.state.address);
        // console.log(e.type)한 결과 = 해당 이벤트의 타입 console에 출력, 여기서는 click
        console.log(e.type, "이벤트 완료");
    }

    // this.setState 이용해서 값 수정
    setToggle(){
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        // render 안에서 불러오는 this = EventComp;
        // this.state는 construct의 속성값
        const {name} = this.state;

        return (
        // 이벤트를 위한 버튼 작성 
        <div>
            <h3>버튼을 클릭했을 때 console.log("이벤트 실행");</h3>
            <button
                // 실행할 함수 내용이 짧을 때 화살표 함수를 이용하여 바로 작성
                // 화살표 함수를 사용할 때 이벤트 객체 e 사용 가능
                // this를 통해서 자기 자신 클래스(여기서는 EventComp)의 컴포넌트를 호출
                // → EventComp에서 사용하는 props값과 state 호출 가능
                onClick={(e) => {console.log(e, this)}}
            >
                화살표 함수를 사용해서 이벤트 실행
            </button>
            <br /><br />
            <button
                // 익명 함수를 사용할 때도 이벤트 객체 사용 가능
                // this를 사용하면 연결된 객체가 없기 때문에 undefined가 출력
                // html파일에서 js 익명 함수를 들고 왔을 때는 window 객체가 출력되지만
                // react에서 익명 함수를 들고 오면 this의 값이 undefined이다

                // react에서 익명 함수를 사용하기 위해서는
                // 함수의 this값을 따로 연결해야 한다
                // this값을 연결하기 위해 .bind(this) 사용
                // return 안에서 .bind(this)로 불러오는 this = EventComp;
                onClick={function(e){console.log(e, this)}.bind(this)}
            >
                익명 함수를 사용해서 이벤트 실행
            </button>

            <h3>이벤트의 함수(메소드)를 따로 작성하는 방법</h3>
            <p>버튼을 눌렀을 때 console.log(이벤트 출력)</p>
            <p>state.name "홍길동"을 출력</p>

            <button
                onClick={function(){
                    console.log("이벤트 출력");
                    // name값을 render에서 this.state로 가지고 왔기 때문에
                    // this를 연결하지 않아도 사용 가능
                    console.log(name);
                }.bind(this)}
            >
                메소드를 사용한 이벤트
            </button>

            <button
                // onClick={printEvent}만 쓰게 된다면 인식되지 않는다
                // 왜? printEvent는 render 밖에서 정의된 메소드이기 때문
                // printEvent는 결국 EventComp의 메소드이기 때문에 this.printEvent의 형태로 사용
                onClick={this.printEvent}
            >
                메소드를 사용한 이벤트
            </button>

            {/* 이벤트: 메소드 만들기 연습 문제 */}
            <p>
                버튼을 누르면 state의 address 부산을 출력하고
                console.log를 이용하여 이벤트 완료 출력
            </p>
            <button
                onClick={this.printAddress}
            >
                현재 지역
            </button>
            <br /><br />

            {/* this.setState를 사용하는 메소드 */}
            <button
                onClick={function(){
                    this.setState({toggle: !this.state.toggle})
                }.bind(this)}
            >
                {this.state.toggle ?("on") :("off")}
            </button>

            <button
                onClick={this.setToggle}
            >
                {this.state.toggle ?("on") :("off")}
            </button>
        </div>
        )
    }
}

export default EventComp
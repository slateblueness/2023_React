import React, { Component } from 'react'


// 클래스형 컴포넌트에서 라이프 사이클 작성 방법 확인
export class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            date: new Date(),
        }
        // 속성 또는 필드라고 명명
        // LifeCycle 컴포넌트에서 전역 변수로 사용하고 싶을 때 ↓와 같이 작성
        this.timerID = "";
    }

    // 라이프 사이클 메소드 中 DidMount: 마운트되었을 때(시작했을 때) 실행
    // 컴포넌트가 처음 보여지는 한 번만 실행되는 메소드
    componentDidMount(){
        console.log("마운트가 되었습니다.");
        // 처음 한 번만 실행하는 내용 작성
        // 또는 외부(공공데이터)에서 값을 한 번만 가져와서 출력할 때 작성
        setInterval(() => {this.tick()}, 1000);
        // setInterval(this.tick, 1000); 의 형태로도 작성 가능
    }

    // 라이프 사이클 메소드 中 DidUpdate: 업데이트되었을 때(화면이 바뀌었을 때) 실행
    // 현재 컴포넌트가 업데이트될 때마다 실행되는 메소드
    // 업데이트: props의 값이 바뀔 때, setState를 통해서 값이 바뀔 때를 의미
    componentDidUpdate(){
        // 모든 업데이트마다 실행할 내용 작성 가능
        console.log("업데이트가 되었습니다.");
    }

    componentWillUnmount(){
        console.log("컴포넌트가 언마운트되었습니다.");
    }

    // 화면에 시간을 출력하는 메소드
    printTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${hours}:${minutes}:${seconds}`
    }

    // 시간값을 다시 할당하는 메소드
    tick = () => {
        // setState를 사용할 때마다 업데이트가 발생한다
        this.setState({date: new Date()})
    }

    render() {
        return (
        <div>
            <h3>라이프 사이클</h3>
            <h3>{this.state.count}</h3>
            <button
                onClick={() => {this.setState({count: this.state.count+1})}}
            >
                +1
            </button>
            <hr />

            <h3>시계 {this.printTime(this.state.date)}</h3>
        </div>
        )
    }
}

export default LifeCycle
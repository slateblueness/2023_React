import React, { Component } from 'react'

export class MapComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            // this.state 안에 들어가 있는 내용에만 this.setState 사용이 가능하다
            names: ["기상호", "조재석", "전영중"],
            students: [
                {id: 1, name: "성준수"},
                {id: 2, name: "공태성"},
                {id: 3, name: "김다은"},
                {id: 4, name: "정희찬"}
            ],
            inputText: "", // onChange를 이용하여 input의 value값을 가져옴
        };

        // 수정될 때마다 값이 화면에 표현되지 않고 값을 저장하고 싶을 경우
        this.id = 5;
    }

    addStudent = () => {
        // 리액트는 state값이 바뀔 때마다 화면이 업데이트됨
        // 1. state.students에 배열의 요소를 추가하는 방법
            // 1) push: 기존의 배열에다 요소를 추가
            // 2) concat: 기존 배열에 요소를 합쳐서 새 배열 return

        // 1) push를 이용해 직접 배열에 접근하여 수정할 수 있지만
        // 화면에 바로 업데이트는 되지 않는 것을 볼 수 있다
        // onChange 이벤트가 발생해야 업데이트됨 → setState()가 호출되면 업데이트
        // button의 click이벤트 발생했을 때는 업데이트되지 않음
        // 직접 접근하는 방식인 push는 잘 사용하지 않는다
        /* this.state.students.push({id:5, name: this.state.inputText}) */

        // 2) concat을 이용해 새로운 배열을 만든 후
        // setState를 이용해 기존 배열에 추가하는 방식
        // id값은 중복되지 않게 1씩 증가하는 형태로 사용
        // 1씩 증가 설정 방법: 배열의 길이값이 1씩 증가하는 것을 응용해서 작성
        const newStudents = this.state.students.concat(
            {
                id: this.id,
                name: this.state.inputText
            })
        this.setState({students: newStudents});

        // 속성값에 직접 접근해서 1씩 증가
        this.id++;

        // input태그에 value={} state값으로 연결하면
        // setState를 통해서 값을 수정할 수 있다
        // 접근하는 state의 이름이 다르면 ↓처럼 따로 적어도 괜찮으며
        // this.setState({students: newStudents, inputText: ""})와 같이 함께 적어도 OK
        this.setState({inputText: ""});
    }

    // 전달해 준 값을 사용하기 위해 매개변수로 받아오기
    deleteStudent = (student) => {
        // 1. 배열에서 값을 제거하는 방법
            // 1) pop, splice 등등: 원래 값을 제거하지 못함
            // 2) 원래의 값을 제거하고 새로운 배열 생성: filter
            // → filter(걸러내는 역할 수행):
            // (value) => return에 들어가는 값이 참일 때 value값을 return한 새 배열에 추가
            const newStudents = this.state.students.filter(
                (s) => s.id !== student.id)
            this.setState({students: newStudents})
    }
    

    render() {
        // 배열의 map메소드 확인
        const array = [1, 2, 3, 4];
        // map메소드의 특징
        // .map((value, index) => {return값})
        // map메소드에 함수를 넣어서 그 함수의 return값으로 새로운 배열 작성
        // return값에 태그나 컴포넌트를 넣어서 반복 가능
        const arrayMap = array.map((num, index) => <p key={index}>{num*2}</p>);

        return (
        <div>
            <h3>배열을 바로 출력</h3>
            <p>{array}</p>
            {arrayMap} <br />

            <h3>map으로 만든 배열을 화면에 바로 출력 가능</h3>
            {array.map((num, index) => <p key={index}>{num*3}</p>)}

            {/* state값을 가져와서 바로 출력 */}
            <ul>
                {this.state.names.map((name, index) => <li key={index}><span>이름: </span>{name}</li>)}
            </ul>

            {/* input태그를 이용해서 state.students에 값을 추가
                1. input의 값을 저장할 state.inputText 변수 작성
                2. onChange를 통해서 값을 받아옴(state.inputText에)
                3. 버튼을 클릭했을 때 state.students에 추가
            */}
            <input
                type="text"
                // inputText에 값을 저장
                onChange={(e) => {this.setState({inputText: e.target.value})}}
                value={this.state.inputText}
            />
            <button
                // 버튼을 클릭했을 때 state.students에 {id: 5, name: ""} 객체 추가
                onClick={this.addStudent}
                
            >
                이름 추가
            </button>

            {/* table에 배열의 객체값 출력 */}
            <table>
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>이름</td>
                    </tr>
                    {
                        this.state.students.map((student) =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td
                                // student의 값을 전달하기 위해서 화살표 함수로 감싸기
                                onClick={() => {this.deleteStudent(student)}}
                            >
                                {student.name}
                            </td>
                        </tr>)
                    }
                    {
                        // 컴포넌트의 props값을 이용해서 값 전달 가능
                        this.state.students.map((student) =>
                        <TableComp key={student.id} name={student.name} id={student.id}/>)
                    }
                </tbody>
            </table>
        </div>
        )
    }
}

export default MapComp

/* map에서 사용할 컴포넌트 */
class TableComp extends Component{
    // 호출하는 컴포넌트(부모)에서 값을 받아서 쓰기 위해 props 사용
    render(){
        const {id, name} = this.props

        return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
            </tr>
        )
    }
}
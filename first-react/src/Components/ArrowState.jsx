// React 16.8버전 이후로 함수형에서 state 사용 가능
import { useState } from "react";

// css파일 들고 오기
import './arrowState.css'

// 현재 컴포넌트에서 전역변수로 사용할 변수 작성
// 화면의 업데이트와 상관없이 사용하는 변수
// 업데이트, 초기화되지 않도록 함수 밖에서 작성한다
let globalId = 4;

// 함수형 컴포넌트의 특징
// 1) this를 사용하지 않는다
// 2) 값을 넣어 줄 때 변수로 할당하기 때문에 const나 let을 사용

const ArrowState = (props) => {
    // useState는 항상 함수(컴포넌트) 안에 작성
    const [message, setMessage] = useState({
        time: "10:55",
        text: "메시지입니다."
    });

    // useState는 동일한 컴포넌트 내에서 여러 번 사용할 수 있다
    const [number, setNumber] = useState(666);

    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const [students, setStudents] = useState([
        {id: 1, name:"사노 만지로", checked: true},
        {id: 2, name:"류구지 켄", checked: false},
        {id: 3, name:"바지 케이스케", checked: false}
    ]);

    // input을 통해 멤버 이름을 받아올 공간
    const [inputName, setInputName] = useState("");

    // 클래스형 컴포넌트에서 render() 안의 값이 계속해서 초기화되는 것과 같이
    // 함수형 컴포넌트에서는 함수 안에 있는 내용이 계속해서 초기화된다
    let id = 4;

    // 메소드 작성
    // 함수형 컴포넌트의 특징: this를 사용하지 않음
    // 화살표 함수, 익명 함수 모두 사용 가능
    const inputChange = (event) => {setInputName(event.target.value)}

    const addStudent = () => {
        // 1. 값을 받아와서 새로운 배열로 만들기
        // 2. 만들어진 새로운 배열을 students에 할당

        // 새로운 배열이 들어갈 공간 만들기
        const newStudents = students.concat({
            id: globalId++,
            name: inputName
        });
        setStudents(newStudents);
        setInputName("");
    }

    // id값을 전달하여 메소드 안에서 사용
    const deleteStudent = (id) => {
        // 클릭한 id값을 제외하고 새로운 배열 작성
        // filter를 사용하여 내용 작성
        const studentOut = students.filter(
            (student) => {return student.id !== id}
        );
        setStudents(studentOut);
    }

    return(
        // state에 접근할 때는 변수에 접근하듯이 { }를 사용하여 작성
        <div>
            <p>{number}, {message.text}</p>

            <button
                // useState로 작성한 함수를 통해 값을 넣어 줄 때는
                // 해당 값의 자료형이 같지 않아도 넣어 주게 되어 있다
                // 때문에 작성할 때 해당 값의 자료형을 확인한 뒤 동일한 자료형으로 할당

                // 객체or배열의 일부분만 수정하고자 할 때 사용하는 연산자
                // ...(스프레드 연산자): 객체나 배열 안에 있는 값(요소)들을 꺼내서 사용
                // 객체에서 동일한 속성 이름을 사용하면 마지막에 적은 값을 사용한다
                onClick={() =>
                    {setMessage({...message, text: "스프레드 연산자를 이용해 수정된 내용입니다."})}}
            >
                텍스트 수정
            </button>

            {
                array.map((num, index) => {return <li key={index}>{num}</li>})
            }
            {array}
            <br/><br/>

            <h3>멤버 추가</h3>
            <input
                type="text" 
                onChange={inputChange}
                value={inputName}
            />
            <button
                onClick={addStudent}
            >
                추가
            </button>

            {/* map을 이용하여 id값과 name값을 화면에 출력 */}
            <ul>
            {
                students.map((doman) =>
                {return <li
                    key={doman.id}
                    className={doman.checked ?("on") :("")}
                >
                    <input
                        type="checkbox"
                        checked={doman.checked} readOnly
                        onClick={() => {
                            // 체크박스를 클릭하면 클릭한 객체의 checked값이 변경
                            // map을 이용하여 작성
                            // map의 특징: 배열 안 요소의 값을 return을 통해 새로운 배열 생성
                            // 클릭한 객체를 찾았다면 → 그 객체의 checked값을 수정해서 return
                            const checkedStudents = students.map((s) => {
                                // s를 통해서 각각의 객체값을 확인할 수 있음
                                // 1) 클릭한 체크박스의 id값과 모든 s의 id값을 비교
                                // 2) id값이 같지 않다면 원래대로 유지
                                // 3) id값이 같다면 checked값을 !를 이용해 수정한 객체로 변경
                                // 현재 함수 안에서 작성 중이기 때문에 if문 사용 가능
                                if(doman.id !== s.id){
                                    return s;
                                } else{
                                    // 원래 객체에서 checked값만 수정하기 위해
                                    // s 안에 있는 속성을 스프레드 연산자(...)를 통해서 추가
                                    // 추가된 속성 중 수정할 속성인 checked만 꺼내서 수정
                                    return{...s, checked: !s.checked}
                                }
                            })
                            setStudents(checkedStudents);
                        }}
                    />
                    {doman.id}: {doman.name}
                    <button
                        // 클릭했을 때 배열을 삭제(클래스형 컴포넌트 내용 참고해서 작성)
                        onClick={() => {deleteStudent(doman.id)}}
                    >
                        삭제
                    </button>
                </li>})
            }
            </ul>

        </div>
    )
}

export default ArrowState;
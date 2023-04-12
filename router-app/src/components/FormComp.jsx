import React, {useState} from 'react'
// 컴포넌트가 아닌 자바스크립트의 함수로 이동하기 위한 내용
import { useNavigate } from 'react-router-dom';

export default function FormComp() {
    // 함수 컴포넌트 안에서 호출
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    
    // About에 form을 이용하여 쿼리스트링을 전달하기 위한 컴포넌트
    return (
        <div>
            <form onSubmit={
                (e) => {
                    e.preventDefault(); // 자동으로 넘어가지 않도록 막는 역할
                    // 라우터를 이용하여 이동
                    // Link 컴포넌트 사용 불가
                    // navigate를 통해서 주소 이동 가능
                    navigate(`/about?name=${input}`)
                }
            }>
                <label htmlFor="">이름</label>
                <input type="text" name='name'
                    onChange={(e) => {setInput(e.target.value)}}
                />
                <input type="submit" value="제출"/>
            </form>
        </div>
    )
}

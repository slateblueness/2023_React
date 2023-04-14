import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../data/dummy.json'

// board에 data의 내용이 필요

export default function Board() {
    // useNavigate를 사용하면 함수를 이용해서 화면 이동이 가능해진다
    const navigate = useNavigate();

    const {id} = useParams();
    // 배열의 함수인 find를 이용하여
    // 함수의 조건을 적용했을 때 결과가 참인 하나의 값을 가져온다
    // find는 배열 내에 있는 1개의 단일한 값을 가져온다
    // find로 값을 찾지 못할 경우 undefined로 출력
    // undefined의 값에서 속성을 찾으려고 할 때 → 오류 발생
    // undefined에서 속성을 찾지 않도록 막아서 오류 방지 및 해결 (여기에서는 useEffect를 활용)
    const boardData = data.find((d) => (d.id == id))

    // useEffect를 사용하여 boardData값이 undefined로 출력되면
    // 오류가 발생했다고 알려 주는 페이지로 이동 or 목록으로 다시 이동하도록
    // 컴포넌트를 만들어 연결할 수 있음 (시스템 자체 에러 페이지 출력 방지)
    // useEffect의 두 번째 인자값이 빈 배열이라면 컴포넌트 생성 시에만 실행 (아래에서 []가 두 번째 인자)
    useEffect(() => {
        if (boardData == undefined) {
            navigate('/boardlist');
        }
    }, [])

    return (
        <div>
            {/* return 부분이 화면에 먼저 렌더된 이후 useEffect가 실행되기 때문에
              * useEffect만 작성했을 때는 오류를 제거할 수 없었던 상황
              * 그렇기 때문에 return 부분에서 나타나는 오류를 제거한 뒤 useEffect가 실행될 수 있도록
              * 삼항연산자(여기에서는 &&)를 이용하여 return 부분 오류 제거 */}
            {
                boardData && (
                    <div>
                        <h3>제목: {boardData.title}</h3>
                        <p>작성자: {boardData.writer}</p>
                        <p>내용: {boardData.content}</p>
                        <p>날짜: {boardData.date}</p>
                    </div>
                )
            }
        </div>
    )
}

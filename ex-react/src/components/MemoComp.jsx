import React, { Component } from 'react'

export class MemoComp extends Component {
    // state 작성
    constructor(props){
        super(props);
        this.state = {
            memoList: [
            {id: 1, memo: "기록", time: new Date()},
            {id: 2, memo: "연습", time: new Date()}],
            inputMemo: ""
        }
        this.id = 3;
    }

    /* input태그로 입력하는 메소드 작성 */
    addMemo = () => {
        const newMemo = this.state.memoList.concat({
            // id++는 후위연산자로, 모든 연산(값을 할당)이 끝난 후에 1을 증가시킨다
            id: this.id++,
            memo: this.state.inputMemo,
            time: new Date()
        });
        this.setState({memoList: newMemo, inputMemo: ""});
    }

    // 메소드로 빠져나오면서 필요한 값은 매개변수로 가져온다
    // ↓의 경우 id값이 필요하기 때문에 id만 매개변수로 가져와 사용
    deleteMemo = (id) => {
        // filter를 사용할 때: 동일한 id를 제외한 새로운 배열을 생성
        const newMemo = this.state.memoList.filter(
            // map에서 memo라는 이름을 사용했기 때문에 다른 이름인 m으로 사용
            (m) => m.id !== id
        )
        this.setState({memoList: newMemo})
    }

    // 시간값을 편하게 출력하기 위한 메소드 작성
    // return을 통해서 화면에 출력 가능
    // 시간을 출력하기 위해 time값 가져와서 사용
    printTime = (time) => {
        // 가능하면 this.setState 사용 지양

        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${hours}:${minutes}:${seconds}`
    }

    render() {
        return (
        <div>
            <h3>메모 리스트 출력</h3>
            {/* state를 이용하여 memoList의 내용을 map으로 li태그에 출력 */}
            <input
                type="text"
                onChange={(e) => {this.setState({inputMemo: e.target.value})}}
                value={this.state.inputMemo}
            />
            <button
                onClick={this.addMemo}
            >
                메모 추가
            </button>

            <ul>
                {
                    this.state.memoList.map((memo) =>
                    <li
                        key={memo.id}
                        onClick={() => {this.deleteMemo(memo.id)}}
                    >
                        {memo.id}. {memo.memo} / {this.printTime(memo.time)}
                    </li>
                    )}
            </ul>
        </div>
        )
    }
}

export default MemoComp
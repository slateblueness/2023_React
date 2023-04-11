import { useState, useTransition } from 'react'
import './TodoComp.css'

let globalId = 3;

const TodoComp = (props) => {
    // TodoComp에서 사용할 데이터
    // inputTodo: input을 통해서 가져올 값
    // oldTodos: todo를 저장할 배열
    // {id:1, content: "첫 번째 할 일", date: new Date("2023-04-06"), checked: false}

    // 변수 작성
    // 각 투두리스트 목록에 작성한 날짜를 표시할 때 필요한 변수
    const [todoDate, setTodoDate] = useState(new Date());

    const newMonth = todoDate.getMonth()+1;
    const newDate = todoDate.getDate();
    console.log(newMonth, newDate);

    // 투두리스트 기존 항목
    const [oldTodos, setOldTodos] = useState([
        {id: 1, content: "첫 번째 할 일", date: `${newMonth}월 ${newDate-1}일`, checked: false},
        {id: 2, content: "두 번째 할 일", date: `${newMonth}월 ${newDate}일`, checked: false}
    ]);

    // 투두리스트 새 항목을 작성할 때 필요한 변수
    // input을 통해 투두리스트 내용을 받아올 공간
    const [newTodos, setNewTodos] = useState("");

    // 메소드 작성
    const inputTodo = (e) => {setNewTodos(e.target.value)}

    const addTodo = () => {
        const newTodoLists = oldTodos.concat({
            id: globalId++,
            date: `${newMonth}월 ${newDate}일`,
            content: newTodos
        });
        setOldTodos(newTodoLists);
        setNewTodos("");
    }

    const deleteTodo = (id) => {
        const todoFilter = oldTodos.filter(
            (todo) => {return todo.id !== id}
        );
        setOldTodos(todoFilter);
    }

    const todayList = (date) => {
        const todayFilter = oldTodos.filter(
            (today) => {return today.date === `${newMonth}월 ${newDate}일`}
        );
        setOldTodos(todayFilter);
    }

    const [allTodos, setAllTodos] = useState(oldTodos);

    const allList = () => {
        setOldTodos(allTodos);
    }

    // 화면에 표시될 내용 작성
    return (
        <div className='TodoComp'>
            {/* 투두리스트 타이틀 */}
            <h1 className='title'>🎲 Todo List 🎲</h1><br />

            {/* 할 일 입력창과 추가 버튼 */}
            <div className='todo-input'>
                <input
                    className='input'
                    type="text"
                    placeholder='Enter your todo-list !'
                    onChange={inputTodo}
                    value={newTodos}
                />
                <button
                    className='btn0'
                    onClick={addTodo}
                >
                    +
                </button>
            </div>
            <br /><hr /><br/>

            {/* 전체 할 일, 오늘의 할 일 버튼 */}
            <button
                className='btn1'
                onClick={allList}
            >
                All Lists
            </button>
            <button
                className='btn2'
                onClick={todayList}
            >
                Today's Lists
            </button> <br /><br />

            {/* 투두리스트 목록 */}
            {
                oldTodos.map((oldTodo) => {
                    return <div
                        className={
                            oldTodo.checked ?('done') :("")
                            + 'oldTodo'}
                        key={oldTodo.id}
                    >
                        {oldTodo.date}<br/>
                        <input
                            type="checkbox"
                            className='btn3'
                            checked={oldTodo.checked} readOnly
                            onClick={() => {
                                const checkedList = oldTodos.map((todo) => {
                                    if(oldTodo.id !== todo.id){
                                        return todo;
                                    } else{
                                        return{...todo, checked: !todo.checked}
                                    }
                                })
                                setOldTodos(checkedList);
                            }}
                        />
                        {oldTodo.content}
                        <button
                            className='btn4'
                            onClick={() => {deleteTodo(oldTodo.id)}}
                        >
                            X
                        </button>
                    </div>
                })
            }
        </div>
    )
}

export default TodoComp
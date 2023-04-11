import logo from './logo.svg';
import './App.css';

import EventComp from './Components/EventComp';
import EventComp2 from './Components/EventComp2';
import ArrowComp from './Components/ArrowComp';
import ArrowTest from './Components/ArrowTest'
import ArrowState from './Components/ArrowState';

function App() {
  return (
    <div className="App">
      <h1>리액트 프로젝트를 수정해서 사용합니다.</h1>

      {/* 이벤트 1 파일 */}
      <EventComp/>

      {/* 이벤트 2 파일 */}
      <EventComp2/><hr/>

      {/* 함수형 컴포넌트 */}
      <ArrowComp text="문자열을 전달"/>
      {/* <Comp>사이에 들어간 값은 Comp의 children이 됨</Comp> */}
      <ArrowComp>children으로 전달</ArrowComp>

      {/* 함수형 컴포넌트 연습 */}
      {/* 아래의 컴포넌트를 함수형으로 만들고 출력
        * name="green": h3태그로 출력
        * children="환영합니다": p태그로 출력
        * check={true}: check값이 true일 때 name 출력
      */}
      <ArrowTest name="green" check={true}>환영합니다.</ArrowTest>

      {/* 함수형 컴포넌트의 useState */}
      <ArrowState/>
    </div>
  );
}

// import를 이용하여 다른 파일에서 값을 가져올 때 내보내는 값: export
export default App;

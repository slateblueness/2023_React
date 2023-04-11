import './App.css';

// 라우터를 사용하기 위해 router-dom에서 컴포넌트를 가지고 옴
import {Routes, Route} from 'react-router-dom'

// 각각의 페이지(하나의 주소)에 보일 컴포넌트
import Home from './page/Home';
import About from './page/About';
import Story from './page/Story';
import Story2 from './page/Story2';
import Error from './page/Error';

function App() {
  return (
    // Routes를 이용하여 컴포넌트와 주소를 연결하는 Route를 정리
    // div태그 안에 Routes태그를 넣어서 사용해도 OK, 아래처럼 Routes태그만 작성해도 OK
    <Routes>
      {/* app.js 안에서 Route를 이용하여 주소와 컴포넌트를 연결
        * path: 주소, '/' 형태로 작성하면 첫 화면에 보이는 주소로 연결
        * element: 컴포넌트, {</>}를 사용해서 작성
      */}
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>

      {/* <Stroy/> 컴포넌트를 만들어서, '/story' 주소로 연결
        * 확인은 주소창에 http://localhost:3000/story로 확인 가능 */}

      {/* URL 파라미터를 이용한 값 전달
        * path의 주소값이 들어갈 공간에 이름을 지정해서 작성
        * 브라우저 주소창에 입력되었을 때 입력한 임의의 이름으로 접근 가능 */}
      <Route path='/story/:value' element={<Story/>}/>

      {/* 연습) <Story/>를 복사하여 <Story2/>로 수정해서 사용
        * URL 파라미터 이름: name으로 작성 → path='/story2/:name'으로 연결
        * URL 파라미터로 전달할 값: green으로 작성
        * useParams()를 이용해서 화면에 출력하기
        * 출력 방법: 브라우저의 주소창에 /story2/green 입력 */}
      <Route path='/story2/:name' element={<Story2/>}/>

      {/* path에 *을 넣으면 지정된 주소 외에는 전부
        * element로 연결된 컴포넌트가 출력된다
        * 상단에 작성한 다른 주소와 헷갈리지 않도록 가장 아래에 두는 편이 좋음 */}
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
}

export default App;
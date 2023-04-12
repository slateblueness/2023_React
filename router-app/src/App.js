import './App.css';

// 라우터를 사용하기 위해 router-dom에서 컴포넌트를 가지고 옴
import {Routes, Route} from 'react-router-dom'

// 각각의 페이지(하나의 주소)에 보일 컴포넌트
import Home from './page/Home';
import About from './page/About';
import Story from './page/Story';
import Story2 from './page/Story2';
import Error from './page/Error';
import Articles from './page/Articles';
import Article from './page/Article';
import Story3List from './page/Story3List';
import Story3 from './page/Story3';
import HeaderLink from './components/HeaderLink';
import Layout from './page/Layout';
import NavigatePage from './page/NavigatePage';
import NaviStatePage from './page/NaviStatePage';

function App() {
  return (
    // Routes를 이용하여 컴포넌트와 주소를 연결하는 Route를 정리
    // div태그 안에 Routes태그를 넣어서 사용해도 OK, 아래처럼 Routes태그만 작성해도 OK
    <div>
      {/* Routes 안에 들어가지 않는 컴포넌트를 사용해서 화면이 이동해도 계속해서 보이게 만들 수 있다 */}
      <HeaderLink/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* app.js 안에서 Route를 이용하여 주소와 컴포넌트를 연결
            * path: 주소, '/' 형태로 작성하면 첫 화면에 보이는 주소로 연결
            * element: 컴포넌트, {</>}를 사용해서 작성
          */}
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>

          {/* <Stroy/> 컴포넌트를 만들어서, '/story' 주소로 연결
            * 확인은 주소창에 http://localhost:3000/story로 확인 가능 */}

          {/* URL 파라미터를 이용한 값 전달
            * path의 주소값이 들어갈 공간에 이름을 지정해서 작성
            * 브라우저 주소창에 입력되었을 때 입력한 임의의 이름으로 접근 가능 */}
          <Route path='/story' element={<Story/>}>
            <Route path='/story/:value' element={<Story/>}/>
          </Route>

          {/* 연습) <Story/>를 복사하여 <Story2/>로 수정해서 사용
            * URL 파라미터 이름: name으로 작성 → path='/story2/:name'으로 연결
            * URL 파라미터로 전달할 값: green으로 작성
            * useParams()를 이용해서 화면에 출력하기
            * 출력 방법: 브라우저의 주소창에 /story2/green 입력 */}
          <Route path='/story2' element={<Story2/>}>
            <Route path='/story2/:name' element={<Story2/>}/>
          </Route>
          
          {/* 연습) page 폴더에 Story3List.jsx 만들고
            * colors 배열을 들고 와서 Link 작성
            * Link를 클릭했을 때 Story3가 보일 수 있게 작성
            * 주소창에 '/story3'을 입력해서 접근하여 확인 */}
          <Route path='/story3' element={<Story3List/>}>
            <Route path=':colorName' element={<Story3/>}/>
          </Route>

          <Route path='/story3List' element={<Story3List/>}/>

          {/* 관련된 페이지는 주소로 분류해서 사용 가능 */}
          <Route path='/articles' element={<Articles/>}>
            {/* 중첩 라우터: Outlet과 함께 사용
              * Outlet은 감싸고 있는 Articles에서 사용 */}
            <Route path=':id' element={<Article/>}/>
          </Route>

          {/* navigate를 이용한 값 전달
            * NavigatePage.jsx → 버튼을 클릭하면 이동하면서 값 전달
            * NaviStatePage.jsx → 전달받은 값 출력 */}
          <Route path='/navigate' element={<NavigatePage/>}/>
          <Route path='/navigate/state' element={<NaviStatePage/>}/>

          {/* path에 *을 넣으면 지정된 주소 외에는 전부
            * element로 연결된 컴포넌트가 출력된다
            * 상단에 작성한 다른 주소와 헷갈리지 않도록 가장 아래에 두는 편이 좋음 */}
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
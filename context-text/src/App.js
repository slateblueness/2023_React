import './App.css';
import Toolbar from './components/Toolbar';
import React from 'react';

// App.js에서 쓰기 위해 따로 컴포넌트 파일로 작성한 ThemeConext 호출
import ThemeContext from './context/ThemeContext';
import ObjectContext from './context/ObjectContext';
import ContextBox from './components/ContextBox';
import { DataProvider } from './context/DataContext';
import DataBox from './components/DataBox';
import DataPrint from './components/DataPrint';

// ObjectContext.Provider의 value값을
// 따로 변수에 저장해서 사용 가능하도록 만드는 과정
// but 변수의 값이 많다면 확인하기 힘들다는 단점이 있음
// Context를 만들 때 value값도 함께 작성해서 만들자!
const initValue = {name: "성춘향", login: true}

function App() {
  return (
    <div className="App">
      {/* 작성한 context값을 사용할 컴포넌트를 감싸서 사용 */}
      <ThemeContext.Provider value='Context를 공부하고 있습니다'>
        <ObjectContext.Provider value={{name: "홍길동", login: true}}>
          {/* ThemeContext와 ObjextContext값 확인 */}
          <Toolbar/>
        </ObjectContext.Provider>
      </ThemeContext.Provider>

      {/* ContextBox를 가져와서 ThemeContext를 이용하여 blue라는 값 전달하기 */}
      <ThemeContext.Provider value='blue'>
        <ContextBox/>
      </ThemeContext.Provider>

      {/* DataContext를 이용해서 value값을 전달한 DataProvider 사용 */}
      <DataProvider>
        <DataBox/>
        <br/>
        <DataPrint/>
      </DataProvider>
    </div>
  );
}

export default App;

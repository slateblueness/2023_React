import './App.css';
import Toolbar from './components/Toolbar';
import React from 'react';

// App.js에서 쓰기 위해 따로 컴포넌트 파일로 작성한 ThemeConext 호출
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      {/* 작성한 context값을 사용할 컴포넌트를 감싸서 사용 */}
      <ThemeContext.Provider value='grey'>
        <Toolbar/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

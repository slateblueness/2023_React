import logo from './logo.svg';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <h3>React 홈페이지: 주요 개념 - React로 생각하기</h3>
      <a href='https://ko.reactjs.org/docs/thinking-in-react.html'>홈페이지로 이동</a>
      <br/><br/>
      <FilterableProductTable/>
    </div>
  );
}

export default App;

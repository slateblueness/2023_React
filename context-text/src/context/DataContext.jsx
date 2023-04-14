// DataContext는 값(value)을 App에서 넣어 주는 것이 아니라
// 동일한 파일 내에서 작성하는 방법으로 작성

import React from "react";
import { useState } from "react";

// DataContext 작성
const DataContext = React.createContext(null);

// App.js에서 값을 전달할 때
// DataContext.Provider를 이용하여 값 전달

// 이 공간에서 값을 추가한 Provider 작성 후 내보내기
// provider는 컴포넌트 형태
// children: DataContext.Provider 사이의 컴포넌트
const DataProvider = ({children}) => {
    // 사용할 데이터: useState()를 통해 작성
    // (최대한) 함수형 컴포넌트에서 받아서 사용
    const [login, setLogin] = useState(true);
    const [name, setName] = useState("홍길동");

    // state로 작성한 값들을 value에 넣기
    const value = {
        state: {login, name},
        action: {setLogin, setName}
    }

    // return을 통해서 provider에서 쓰도록 내보내 줌
    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

// 감싸서 값을 전달하기 위한 컴포넌트
export {DataProvider}

// 값을 가져오기 위해 접근하는 값
export default DataContext
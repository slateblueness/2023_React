import React, { Component } from 'react'

// SearchBar 컴포넌트의 역할: 글자를 입력받아서 필터링하는 컴포넌트
export class SearchBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {isOnlyStock, toggleStock} = this.props;

        return (
        <div>
            <input type="text" placeholder='Search...'/>
            <br/><br/>

            {/* checkbox/radio의 check값을 가져올 때,
                readOnly 이용해서(뒤에 붙여서) 바뀌는 값을 출력하는 용도로 사용할 수 있다 */}
            <input
                type="checkbox"
                // checked={isOnlyStock} readOnly 형태로 작성해도 OK
                defaultChecked={isOnlyStock}
                onClick={toggleStock}
            />
            <label htmlFor="">
                Only show products on stock
            </label>
        </div>
        )
    }
}

export default SearchBar
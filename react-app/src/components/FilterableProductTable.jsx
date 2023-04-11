import productData from '../data/product.json'

import React, { Component } from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

/* 작성 방식 */
// 1. 하향식으로 작성: 부모로부터 자식 방향으로 작성
// 2. 정적 데이터를 이용해서 작성
// 3. state와 props을 구분해서 작성

export class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            isOnlyStock: false
        }
    }

    // toggle메소드를 실행할 때마다
    // this.state.isOnlyStock값을 true/false로 변경하는 메소드 작성
    toggleStock = () => {
        this.setState({isOnlyStock: !this.state.isOnlyStock});
        console.log("메소드 실행");
    }

    render() {
        console.log(productData);

        // isOnlyStock이 true일 때
        // productData의 stock이 true인 것만 배열로 만들기
        const checkedProducts = productData.filter((product) => product.stocked)


        return (
        <div>
            {/* 검색어, 체크박스에 관한 값 */}
            <SearchBar
                isOnlyStock={this.state.isOnlyStock}
                // 메소드를 작성해서 props값으로 전달할 수 있음
                toggleStock={this.toggleStock}
            />

            {/* 가져온 데이터값을 보여 줄 공간 */}
            <ProductTable products={this.state.isOnlyStock ?(checkedProducts) :(productData)}/>
        </div>
        )
    }
}

export default FilterableProductTable
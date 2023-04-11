import React, { Component } from 'react'

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

// SearchBar에서 필터링된 값을 테이블로 출력
export class ProductTable extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {products} = this.props

        // products배열에 있는 객체 중에서
        // Sporting Goods카테고리에 속한 객체 배열 생성
        const sportingProducts = products.filter(
            (product) => product.category === "Sporting Goods"
        )

        // Eletronics카테고리에 속한 객체 배열 생성
        const electronicsProducts = products.filter(
            (product) => product.category === "Electronics"
        )

        return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>

                    <ProductCategoryRow category="Sporting Goods"/>
                    {
                        // products의 category 중 'Sporting Goods'를 가진 배열을 만드는 방법
                        // filter를 이용해서 내용을 작성 후
                        // <ProductRow/> 통해서 내용 출력
                        sportingProducts.map(
                            (product, index) =>
                            <ProductRow
                                key={index}
                                name={product.name}
                                price={product.price}
                            />
                        )
                    }

                    
                    <ProductCategoryRow category="Eletronics"/>
                    {
                        electronicsProducts.map(
                            (product, index) =>
                            <ProductRow
                                key={index}
                                name={product.name}
                                price={product.price}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
        )
    }
}

export default ProductTable
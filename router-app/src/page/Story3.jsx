import React from 'react'

import { useParams } from 'react-router-dom'

export default function Story3() {
    const params = useParams();
    const {colorName} = useParams(); // 객체

    return (
        <div>
            <h1>
                {params.colorName}
                Story2
            </h1>
            <p>
                {colorName}
                Story2 페이지입니다.
            </p>
        </div>
    )
}

const ArrowComp = (props) => {
    // 변수를 추가할 수 있음
    const {text, children} = props;

    return(
        <div>
            <h3>함수형 컴포넌트입니다.</h3>
            <p>하나의 부모 태그로 묶어서 return</p>
            <p>text속성으로 가져온 props값 {props.text} {text}</p>
            <p>{props.children} {children}</p>
        </div>
    )
}

export default ArrowComp;
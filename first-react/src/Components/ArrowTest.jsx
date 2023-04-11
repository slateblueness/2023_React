const ArrowTest = (props) => {
    const {name, check, children} = props;

    return(
            <div>
                {check && <h3>{name}</h3>}
                <h3>{check ?(name) :("")}</h3>
                <p>
                    <input type="checkbox"/>
                    {children}
                </p>
            </div>
    )
}

export default ArrowTest;
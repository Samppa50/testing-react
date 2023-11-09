const Greeting = () => {
    const [textChanged, setTextChanged] useState(false);


    return(
        <div>
            <h2>
                hello world
            </h2>
            {!textChanged && <p>nice to see you</p>}
            {textChanged && <p>change1</p>}
            <button onClick={textChangedHandler}>
                change text
            </button>
        </div>
    )
};

export default Greeting;
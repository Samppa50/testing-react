import { useState } from "react";


const Greeting = () => {
    const [ textChanged, setTextChanged] = useState(false);
    const changeTextHandler = () => {
      setTextChanged(!textChanged)
    }

    return(
        <div>
            <h2>Hello World</h2>
            {!textChanged && <p>nice to see you</p>}
            {textChanged && <p>change1</p>}
            <button onClick={changeTextHandler}>
                change text
            </button>
        </div>
    )
};

export default Greeting;
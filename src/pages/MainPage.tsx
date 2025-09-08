import {useState} from "react";

export const MainPage = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1)}>click +1</button>
        </div>
    )
}
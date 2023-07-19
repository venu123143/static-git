import { useEffect, useState } from "react"
import "./app.css"

const App = () => {
    const [state, setState] = useState(0)
    const handleChange = () => {
        setState(state + 1)
    }
    useEffect(() => {
        console.log("called");
    },[state])
    return (
        <>
            <h1>Num: {state}</h1>
            <button className="button" onClick={handleChange}>Inc</button>
            <button className="button" onClick={() => setState(state - 1)}>Dec</button>
            <button className="button" onClick={() => setState(0)}>reset</button>
            <h2>gopal </h2>

        </>
    )
}
export default App
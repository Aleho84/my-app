import { useState } from "react";

export default function Test(props) {    
    const [counter, setCounter] = useState(0);

    const { user } = props;

    return (
        <div>
            <p>Hola {user}!</p>
            <p>Contador con Hooks</p>
            <p>El numero del contador es: {counter}</p>
            <button type="submit" onClick={() => setCounter(counter + 1)}>Incrementar</button>
        </div>
    )
}
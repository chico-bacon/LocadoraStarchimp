import { useState } from "react"

function PassInput(props) {
    const [pass, setPass] = useState('');

    return (
        <div>
            <label for={props.id}>{props.label}</label>
            <input
            id={props.id}
            value={pass}
            type="password"
            onChange={event => {setPass(pass = event.target.value)}}
            />
        </div>
    )
};

export default PassInput
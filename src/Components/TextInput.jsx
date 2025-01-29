import { useState } from "react"

function TextInput(props) {
    const [info, setInfo] = useState('');
    return (
        <div>
            <label for={props.id}>{props.label}</label>
            <input
            id={props.id}
            type="text"
            />
        </div>
    )
}

export default TextInput
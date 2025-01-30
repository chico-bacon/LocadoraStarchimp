import React from "react"
import { useState } from "react"
import PassInput from "./PassInput"
import TextInput from "./TextInput"
import "./LoginForm.css"

function LoginForm() {
    const [info, setInfo] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className="LoginForm">
            <h2>Login</h2>
            <form action=''>
                <TextInput id="email" label="Email" value={info} setValue={setInfo}/>
                <PassInput id="pass" label="Senha" value={pass} setValue={setPass}/>
                <button>Login</button>
            </form>
            <a href="">Criar nova conta</a>
        </div>
    )
}

export default LoginForm
import React from "react"
import { useState } from "react"
import PassInput from "./PassInput"
import TextInput from "./TextInput"
import "./LoginForm.css"

function LoginForm() {
    return (
        <div className="LoginForm">
            <h2>Login</h2>
            <form action=''>
                <TextInput id="email" label="Email"/>
                <PassInput id="pass" label="Senha"/>
                <button>Login</button>
            </form>
            <a>Criar nova conta</a>
        </div>
    )
}

export default LoginForm
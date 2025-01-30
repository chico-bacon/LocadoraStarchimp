import TextInput from "./TextInput";
import PassInput from "./PassInput";
import TextField from "./TextField";
import { useState } from "react";
import Client from "../Objects/Cliente";

function ClientAddForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [pass, setPass] = useState('');
    const [verify, setVerify] = useState(''); 
    const cliente = new Client()


    return (
        <form>
            <h2>Formulário de Cadastro</h2>
            <p></p>
            <TextInput id="nome" label="Nome" value={name} setValue={setName}/>
            <TextInput id="email" label="Email" value={email} setValue={setEmail}/>
            <TextField
            id="endereco"
            label="Endereco"
            cols="50"
            rows="4"
            value={address}
            ph="Digite seu endereço"
            setValue={setAddress}
            />
            <PassInput id="senha" label="Senha" value={pass} setValue={setPass}/>
            <PassInput id="conf-senha" label="Confirmar Senha" value={verify} setValue={setVerify}/>
            <button onClick={}>Efetuar Cadastro</button>
            <p></p>
        </form>
    )
};

export default ClientAddForm
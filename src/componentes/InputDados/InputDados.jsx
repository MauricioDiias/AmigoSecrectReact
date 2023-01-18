import "./InputDados.css"
import React, { useState } from "react"
import NomeEmail from "../NomeEmail/NomeEmail"
import Botao from "../Botao/Botao"
function InputDados({ addTodo }) {

    const [nome, setNome] = useState()

    const [email, setEmail] = useState('')

    const [id, setId] = useState(0)

    const todocreat = () => {
        const todoObj = { nome: nome, email: email }
        // setId(id + 1)
        addTodo(todoObj)
        setNome('')
        setEmail('')
    }

    return (
        <div className="inputDados">

            <NomeEmail
                nome={nome}
                email={email}
                setNome={setNome}
                setEmail={setEmail}
            />
            <Botao
                text={'Adicionar'}
                disabled={!nome && !email}
                onClick={() => todocreat()}
            />
        </div>
    )
}
export default InputDados


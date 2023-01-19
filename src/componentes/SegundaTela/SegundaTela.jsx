import './SegundaTela.css'
import { useState } from "react";
import InputDados from "../InputDados/InputDados";
import Botao from '../Botao/Botao';
import criarSorteio from '../../api'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Home() {
    const location = useLocation()
    const [cadastros, setCadastros] = useState([])
    const navigate = useNavigate()

    function sortear() {
        criarSorteio(cadastros);
        navigate('/final')
    }

    const addTodo = (novocadastro) => {
        const existe = cadastros.find(cadastro => cadastro.email === novocadastro.email)
        if (existe) {
            return alert('Email Repetido')
        }
        setCadastros([...cadastros, novocadastro])
    }

    const deleteTodo = (email) => {
        var filtered = cadastros.filter((cadastro) => cadastro.email !== email)
        setCadastros(filtered)
    }
    return (

        <div className="App">
            <div>{location.state.nome}</div>

            <InputDados addTodo={addTodo} />
            <div className='containerLinSortear'>
                <div className='lin'>
                    <Link className='voltar' to='/' state={{ nome: location.state.nome }}>Voltar</Link>
                </div>
                <div className='sortear'>
                    <Botao onClick={sortear} text={'sortear'} to='/' ></Botao>
                </div>
            </div>
            <div className='list'>
                {cadastros.map((cadastro) => (
                    <div className="item">
                        <div>{cadastro.nome}-{cadastro.email}<button onClick={() => deleteTodo(cadastro.email)}>Excluir</button></div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Home

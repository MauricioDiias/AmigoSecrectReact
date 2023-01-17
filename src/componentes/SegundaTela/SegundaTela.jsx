import './SegundaTela.css'
import { useEffect, useState } from "react";
import InputDados from "../InputDados/InputDados";
import Botao from '../Botao/Botao';
import Input from '../Input';

import PrimeiraTela from '../PrimeiraTela';
import criarSorteio from '../../api'

import { BrowserRouter as Router, Routes, Route, Link, Switch, useLocation } from 'react-router-dom'

function Home() {
    const location = useLocation()

    const [nomeDoSorteio, setnomeDoSorteio] = useState()

    const [todos, setTodos] = useState([])

    //     useEffect(()=>{
    // console.log('@',location)
    //     },[])
    function sortear() {
        criarSorteio(todos);
    }

    const addTodo = (todo) => {
        console.log(todo)
        console.log(todos)
        setTodos([...todos, todo])
    }
    const deleteTodo = (email) => {
        console.log(email)
        var filtered = todos.filter((todo) => todo.email !== email)
        console.log(filtered) //mudar o id para email !!!!!! e fazer a verificação para n adicionar repetido!OK
        setTodos(filtered)
    }
    return (

        <div className="App">
            <div>{location.state.nome}</div>
            <InputDados addTodo={addTodo} />
            <Link to='/' state={{ nome: location.state.nome }}>Primeira Tela</Link>



            {todos.map((todo) => (
                <div className="item">
                    <div>{todo.nome}-{todo.email}<button onClick={() => deleteTodo(todo.email)}>Excluir</button></div>


                </div>
            ))}

            <div className='sortear'>
                <Botao onClick={sortear} text={'sortear'} />
            </div>




        </div>
    );

}

export default Home

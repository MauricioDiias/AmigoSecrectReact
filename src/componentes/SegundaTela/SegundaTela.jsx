import './SegundaTela.css'
import {useState} from "react";
import InputDados from "../InputDados/InputDados";
import Botao from '../Botao/Botao';
import criarSorteio from '../../api'
import {Link,useLocation } from 'react-router-dom'

function Home() {
    const location = useLocation()
    const [todos, setTodos] = useState([])

    function sortear() {
        criarSorteio(todos);
    }

    const addTodo = (todo) => {
        setTodos([...todos, todo])
        console.log('includes',todos.includes(todo))
        console.log('todo',todo)
        console.log('todo.nome',todo.nome)
        console.log('todos',todos)
        
        console.log(todos.map((todo)=>todo.nome))
    }
    
    const deleteTodo = (email) => {
        console.log('email',email)
        var filtered = todos.filter((todo) => todo.email !== email)
        console.log(filtered) 
        setTodos(filtered)
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
                    <Botao onClick={sortear} text={'sortear'} />
                </div>
            </div>
            <div className='list'>
                {todos.map((todo) => (
                    <div className="item">
                        <div>{todo.nome}-{todo.email}<button onClick={() => deleteTodo(todo.email)}>Excluir</button></div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Home

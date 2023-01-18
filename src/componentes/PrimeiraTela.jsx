import { Link, useLocation } from 'react-router-dom'
import Input from './Input'
import { useState } from "react";
import './PrimeiraTela.css'

function PrimeiraTela() {
    const location = useLocation()
    console.log('primeiraTela')
    const [nomeDoSorteio, setnomeDoSorteio] = useState(location.state?.nome || "")

    return (
        <div className='primeiratela'>
            <h1>
                NOME DO SORTEIO
            </h1>
            <Input className='inputt' type='text' nomeDoSorteio={nomeDoSorteio} setnomeDoSorteio={setnomeDoSorteio} />

            <div className='lin'>
                <Link className='avancar' to='/company' state={{ nome: nomeDoSorteio }}  >AVANÇAR</Link>
            </div>
        </div>
    )
}
export default PrimeiraTela
import Botao from "../Botao/Botao"
import { useNavigate } from "react-router-dom"
import './Final.css'
function Final() {
    const navigate = useNavigate()
    function novoSorteio() {
        navigate('/')
    }
    return (
        <div>
            <h1>Sorteio Enviado </h1>
            <p> Confira a sua caixa de email!</p>
            <div className="btn">
                <Botao onClick={novoSorteio} text={'Novo Sorteio'} />
            </div>
        </div>
    )
}
export default Final
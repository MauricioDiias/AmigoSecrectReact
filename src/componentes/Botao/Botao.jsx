
function Botao({ disabled, onClick, text }) {
    

    return <>
        <button disabled={disabled} onClick={onClick}>{text}</button>

    </>
}
export default Botao
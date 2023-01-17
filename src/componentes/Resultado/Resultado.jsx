import jwt_decode from "jwt-decode";

var url=window.location.href
var token1 = url.slice(35)

var token = token1
var decoded = jwt_decode(token);

console.log('decoded',decoded);
console.log('url',url)
console.log('token1',token1)
console.log(token)

function Resultado() {

    return (
        <div>RESULTADO
            {decoded.nome}
        </div>
    )
}
export default Resultado
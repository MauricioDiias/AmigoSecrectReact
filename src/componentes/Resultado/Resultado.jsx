import jwt_decode from "jwt-decode";

function Resultado() {
    var url = window.location.href
    var token1 = url.slice(35)
    var token = token1
    var decoded = jwt_decode(token);
    
    console.log('decoded', decoded);
    console.log('url', url)
    console.log('token1', token1)
    console.log(token)



    return (
        <div>
            Parabéns você tirou <h1>{decoded.nome}</h1> 

            
         </div>
    )
}
export default Resultado
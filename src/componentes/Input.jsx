import { useState } from "react"

function Input({nomeDoSorteio,setnomeDoSorteio}){

    return (<>
        <div><input type="text " value={nomeDoSorteio}  onChange={(e)=>setnomeDoSorteio(e.target.value)}/></div>
       
    </>
    )
}
export default Input
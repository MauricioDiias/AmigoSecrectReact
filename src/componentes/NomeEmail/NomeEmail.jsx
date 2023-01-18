
function NomeEmail({setNome,setEmail,nome,email}) {

    return (
    <>
     <div className="inputNome" >
                <input id='input'
                    type='text'
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} />
            </div>

            <div className="inputNome" >
                <input id='in_email'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
    
    </>
    )
}
export default NomeEmail
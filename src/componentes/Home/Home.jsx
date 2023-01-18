import Titulo from "../Titulo/Titulo"
import SegundaTela from "../SegundaTela/SegundaTela"
import PrimeiraTela from "../PrimeiraTela"

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Resultado from "../Resultado/Resultado"
function Home(){
    return(
        <div>
            <Titulo/>
            
        <Router>
        

        <Routes>
            <Route exact path='/' element={<PrimeiraTela />} />
            <Route exact path='/company' element={<SegundaTela/>} />
            <Route exact path='/resultado' element={<Resultado/>} />
           
        </Routes>
        {/* <p>Footer</p> */}
      </Router>
        </div>
    )
}
export default Home
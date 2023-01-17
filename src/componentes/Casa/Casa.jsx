import Titulo from "../Titulo/Titulo"
import SegundaTela from "../SegundaTela/SegundaTela"
import PrimeiraTela from "../PrimeiraTela"

import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
import Resultado from "../Resultado/Resultado"
function Casa(){
    return(
        <div>
            <Titulo/>
            
        <Router>
        

        <Routes>
            <Route exact path='/' element={<PrimeiraTela />} />
            <Route exact path='/company' element={<SegundaTela />} />
            <Route exact path='/result' element={<Resultado />} />
           
        </Routes>
        {/* <p>Footer</p> */}
      </Router>
        </div>
    )
}
export default Casa
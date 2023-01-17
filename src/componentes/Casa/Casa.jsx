import Titulo from "../Titulo/Titulo"
import SegundaTela from "../Home/SegundaTela"
import PrimeiraTela from "../PrimeiraTela"

import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
function Casa(){
    return(
        <div>
            <Titulo/>
            
        <Router>
        

        <Routes>
            <Route exact path='/' element={<PrimeiraTela />} />
            <Route exact path='/company' element={<SegundaTela />} />
           
        </Routes>
        {/* <p>Footer</p> */}
      </Router>
        </div>
    )
}
export default Casa
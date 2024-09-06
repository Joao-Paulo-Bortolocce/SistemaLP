import Cabecalho from "./Cabecalho"
import Menu from "./Menu"
//import Formulario from "../Telas/Formulario"

export default function Pagina(props){



    return(
        <>
            <Cabecalho texto="Sistema de controle gerencial" />
            <Menu/>
            {
                props.children
            }
        </>
    )
}

//React router doom
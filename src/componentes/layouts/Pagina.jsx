import Cabecalho from "./Cabecalho"
import Menu from "./Menu"
import Formulario from "./Formulario"

export default function Pagina(props){



    return(
        <>
            <Cabecalho texto="Sistema de controle gerencial" />
            <Menu/>
            <Formulario flag="3"/>
            {
                props.children
            }
        </>
    )
}

//React router doom
import Cabecalho from "./Cabecalho"
import Menu from "./Menu"

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
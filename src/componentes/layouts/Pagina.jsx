import Cabecalho from "./Cabecalho"
import Menu from "./Menu"
import { Container } from "react-bootstrap"
//import Formulario from "../Telas/Formulario"

export default function Pagina(props){



    return(
        <>
            <Container>
                <Cabecalho texto="Sistema de controle gerencial" />
                <Menu/>
                {
                    props.children
                }
            </Container>
        </>
    )
}

//React router doom
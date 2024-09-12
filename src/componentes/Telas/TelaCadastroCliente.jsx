import CadastroCliente from "./formularios/CadastrosCliente";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaCliente from "./Tabelas/TabelaCliente";
import { Alert, Container} from "react-bootstrap";

export default function TelaCadastroCliente(){
    const [exibirTabela,setExibirTabela]=useState(true);
    return(
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Clientes</h2>
                </Alert>
                {exibirTabela ? <TabelaCliente setExibirTabela={setExibirTabela}/>: <CadastroCliente setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </Container>
    );
}
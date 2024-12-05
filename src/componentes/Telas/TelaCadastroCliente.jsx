import CadastroCliente from "./formularios/CadastrosCliente";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaCliente from "./Tabelas/TabelaCliente";
import { Alert, Container} from "react-bootstrap";

export default function TelaCadastroCliente(){
    const [exibirTabela,setExibirTabela]=useState(true);
    const [modoEdicao,setModoEdicao]=useState(false);
    const [cliente,setCliente]=useState({
        "cpf": "",
        "nome": "",
        "email": "",
        "cep": "",
        "estado": "",
        "celular": "",
        "dataNascimento": "",
    });
    return(
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Clientes</h2>
                </Alert>
                {exibirTabela ? <TabelaCliente setExibirTabela={setExibirTabela} setModoEdicao={setModoEdicao}  setCliente={setCliente}/>: <CadastroCliente setExibirTabela={setExibirTabela}  setModoEdicao={setModoEdicao} setCliente={setCliente} cliente={cliente} modoEdicao={modoEdicao}/>}
            </Pagina>
        </Container>
    );
}
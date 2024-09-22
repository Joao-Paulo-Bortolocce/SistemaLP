import CadastroCliente from "./formularios/CadastrosCliente";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaCliente from "./Tabelas/TabelaCliente";
import { Alert, Container} from "react-bootstrap";
import { clientes } from "../../dados/mockClientes.js";

export default function TelaCadastroCliente(){
    const [exibirTabela,setExibirTabela]=useState(true);
    const [modoEdicao,setModoEdicao]=useState(true);
    const [listaDeClientes,setlistaDeClientes]=useState(clientes);
    const [cliente,setCliente]=useState({
        nome: "",
        cpf: "",
        email: "",
        cep: "",
        estado: "",
        celular: "",
        dataNascimento: "",
    });
    return(
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Clientes</h2>
                </Alert>
                {exibirTabela ? <TabelaCliente setExibirTabela={setExibirTabela} setModoEdicao={setModoEdicao} listaDeClientes={listaDeClientes} setListaDeClientes={setListaDeClientes} setCliente={setCliente}/>: <CadastroCliente setExibirTabela={setExibirTabela} />}
            </Pagina>
        </Container>
    );
}
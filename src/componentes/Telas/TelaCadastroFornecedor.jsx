import CadastroFornecedor from "./formularios/CadastrosFornecedor";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import { Alert , Container} from "react-bootstrap";
import TabelaFornecedor from "./Tabelas/TabelaFornecedor";

export default function TelaCadastroFornecedor(){
    const [exibirTabela,setExibirTabela]=useState(true);
    const[modoEdicao,setModoEdicao]=useState(false);
    const[fornecedor,setFornecedor]=useState({
        "cnpj": "",
        "nome": "",
        "email": "",
        "estado": "",
        "celular": "",
        "telefone": "",
        "cep": "",
        "numero": 0
    });
    return(
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Fornecedores</h2>
                </Alert>
                    {exibirTabela ? <TabelaFornecedor setExibirTabela={setExibirTabela} setModoEdicao={setModoEdicao} setFornecedor={setFornecedor}  /> : <CadastroFornecedor setExibirTabela={setExibirTabela} setModoEdicao={setModoEdicao} setFornecedor={setFornecedor} fornecedor={fornecedor}  modoEdicao={modoEdicao}/>}
            </Pagina>
        </Container>
    );
}
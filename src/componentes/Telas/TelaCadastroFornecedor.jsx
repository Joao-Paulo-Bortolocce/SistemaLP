import CadastroFornecedor from "./formularios/CadastrosFornecedor";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import { Alert , Container} from "react-bootstrap";
import TabelaFornecedor from "./Tabelas/TabelaFornecedor";
export default function TelaCadastroFornecedor(){
    const [exibirTabela,setExibirTabela]=useState(true);
    return(
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Fornecedores</h2>
                </Alert>
                    {exibirTabela ? <TabelaFornecedor setExibirTabela={setExibirTabela} /> : <CadastroFornecedor setExibirTabela={setExibirTabela}/>}
            </Pagina>
        </Container>
    );
}
import CadastroCategoria from "./formularios/CadastrosCategoria";
import Pagina from "../layouts/Pagina";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";
import TabelaCategoria from "./Tabelas/TabelaCategorias";

export default function TelaCadastroCategorias() {
    const [exibirTabela, setExibirTabela] = useState(true);
    return (
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>Categoria</h2>
                </Alert>
                {exibirTabela ? <TabelaCategoria setExibirTabela={setExibirTabela} /> : <CadastroCategoria setExibirTabela={setExibirTabela} />}
            </Pagina>
        </Container>
    );
}
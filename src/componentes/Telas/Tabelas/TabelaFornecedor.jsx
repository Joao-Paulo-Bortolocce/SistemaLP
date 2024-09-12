import { Button, Container , Table} from "react-bootstrap";

export default function TabelaFornecedor(props){
    return(
        <Container>
            <Button className="mb-3" variant="primary" onClick={()=>{
                props.setExibirTabela(false);
            }}>Adicionar</Button>
            <Table striped bordered hover>
                <thead>
                    <th>CNPJ</th>
                    <th>NOME</th>
                    <th>CELULAR</th>
                    <th>TELEFONE</th>
                    <th>CEP</th>
                    <th>ESTADO</th>
                    <th>NUMERO</th>
                </thead>
                <tbody>
                    {
                        props.listaDeFornecedores?.map((fornecedor)=>{
                            return(
                                <tr>
                                    <td>{fornecedor.cnpj}</td>
                                    <td>{fornecedor.nome}</td>
                                    <td>{fornecedor.celular}</td>
                                    <td>{fornecedor.telefone}</td>
                                    <td>{fornecedor.cep}</td>
                                    <td>{fornecedor.estado}</td>
                                    <td>{fornecedor.numero}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}
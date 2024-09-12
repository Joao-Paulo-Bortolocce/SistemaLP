import { Button, Container, Table } from "react-bootstrap";

export default function TabelaCliente(props) {
    return (
        <Container>
            <Button className="mb-3" variant="primary" onClick={() => {
                props.setExibirTabela(false)
            }}>Adicionar</Button>
            <Table striped bordered hover>
                <thead>
                    <th>NOME</th>
                    <th>CPF</th>
                    <th>DATA DE NASCIMENTO</th>
                    <th>EMAIL</th>
                    <th>CELULAR</th>
                    <th>ESTADO</th>
                    <th>CEP</th>
                </thead>
                <tbody>
                    {
                        props.listaDeClientes?.map((cliente) => {
                            return (
                                <tr>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.dataNascimento}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.celular}</td>
                                    <td>{cliente.estado}</td>
                                    <td>{cliente.cep}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}
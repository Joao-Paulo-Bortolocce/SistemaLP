import { Button, Container, Table } from "react-bootstrap";

export default function TabelaCategoria(props) {
    return (
        <>
            <Container>
                <Button className="mb-3" variant="primary" onClick={() => {
                    props.setExibirTabela(false)
                }}>Adicionar</Button>
                <Table striped bordered hover>
                    <thead>
                        <th>CÓDIGO</th>
                        <th>CATEGORIA</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeCategoria?.map((categoria) => {
                                return (
                                    <tr>
                                        <td>{categoria.nome}</td>
                                        <td>{categoria.cpf}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
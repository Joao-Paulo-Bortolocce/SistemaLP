import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
export default function CadastroEntregador(props) {


    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity()) {
            if (props.modoEdicao) {
                props.setListaEntregadores(props.listaEntregadores.map((item) => {
                    return item.cnh === props.entregador.cnh ? props.entregador : item
                }));
                props.modoEdicao(false);
            }
            else
                props.setListaEntregadores([...props.listaEntregadores, props.entregador]);
            props.setEntregador({
                "nome": "",
                "cnh": "",
                "veiculo": "",
                "placa": "",
                "capacidade": 0
            });
            props.setExibirTabela(true);
        }
        else
            setValidated(true);
        event.preventDefault();
        event.stopPropagation();
    };

    function manipularMudanca(event){
        const id = event.currentTarget.id;
        const valor = event.currentTarget.value;
        props.setEntregador({...props.entregador,[id]:valor})
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="nome"
                        id="nome"
                        value={props.entregador.nome}
                    />
                    <Form.Control.Feedback type="invalid">Informe seu nome</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Numero de CNH</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="00000000000"
                        id="cnh"
                        value={props.entregador.cnh}
                    />
                    <Form.Control.Feedback type="invalid">Informe sua CNH</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Veiculo</Form.Label>
                    <Form.Select
                        aria-label="Tipo de Veículo"
                        required
                        id="veiculo"
                        value={props.entregador.veiculo}
                        onChange={manipularMudanca}
                    >
                        <option value="">Selecione um tipo de veículo</option>
                        <option value="carro">Carro</option>
                        <option value="moto">Moto</option>
                        <option value="caminhao">Caminhão</option>
                        <option value="onibus">Ônibus</option>
                        <option value="bicicleta">Bicicleta</option>
                        <option value="van">Van</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Por favor informe o tipo de carro
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Informe a placa</Form.Label>
                    <Form.Control type="text" placeholder="ABC-1234" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor informe a placa
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Capacidade</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text>KG</InputGroup.Text>
                        <Form.Control type="number" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor informe o peso máximo
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Concondar com os termos"
                    feedback="Você deve concordar com os termos"
                    feedbackType="invalid"
                />
            </Form.Group>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button id="botao" type="submit">{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>

                </Col>
                <Col md={{ offset: 1 }} >
                    <Button onClick={() => {
                        props.setExibirTabela(true);
                    }}>Voltar</Button>

                </Col>
            </Row>
        </Form>
    );

}
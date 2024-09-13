import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroCategoria(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='container'>
      <Row className="mb-6">
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Código</Form.Label>
          <Form.Control type="number"  required />
          <Form.Control.Feedback type="invalid">
            Por-Favor informe o código da categoria
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Descrição"
          />
          <Form.Control.Feedback type='invalid'>Informe a Descrição da categoria</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Concordo com os termos de uso"
          feedback="Você tem que concordar antes de finalizar o cadastro"
          feedbackType="invalid"
        />
      </Form.Group>
      <Row>

        <Col md={1}><Button type="submit">Cadastrar</Button></Col>
        <Col md={{ offset: 1 }}>
          <Button onClick={() => { props.setExibirTabela(true) }}>Voltar</Button>
        </Col>
      </Row>
    </Form>
  );
}

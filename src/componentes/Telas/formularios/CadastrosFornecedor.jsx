import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastrosFornecedor() {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='container w-75'>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>codigo</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Codigo"
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome"
          />
          <Form.Control.Feedback>Belo Nome!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="E-mail"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por-favor informe seu e-mail
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>senha</Form.Label>
          <Form.Control type="text" placeholder="senha" required />
          <Form.Control.Feedback type="invalid">
            Por-favor informe sua senha
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="text" placeholder="(18) 98134-0947" required />
          <Form.Control.Feedback type="invalid">
            Por-favor informe o seu Celular de contato
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" placeholder="(18) 9813-0947" required />
          <Form.Control.Feedback type="invalid">
            Por-favor informe o seu Telefone de contato
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>CNPJ</Form.Label>
          <Form.Control type='password' required />
          <Form.Control.Feedback type="invalid">
            Por Favor informe seu CNPJ
          </Form.Control.Feedback>
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
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}

import { useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroProduto() {
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
      <Row className="mb-4">
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Código</Form.Label>
          <Form.Control type="number"  required />
          <Form.Control.Feedback type="invalid">
            Por-Favor informe o código do produto
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Descrição"
          />
          <Form.Control.Feedback type='invalid'>Informe a Descrição do produto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
          <Form.Label>Estoque</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="estoque"
              aria-describedby="inputGroupPrepend"
              min="0"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por-favor informe um valor para o estoque
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">-
          <Form.Label>Preço de custo</Form.Label>
          <Form.Control min="0" type="number" placeholder="Preço de custo" required />
          <Form.Control.Feedback type="invalid">
            Por-favor informe o Preço de custo
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Preço de Venda</Form.Label>
          <Form.Control min="0" type="number" placeholder="Preço de venda" required />
          <Form.Control.Feedback type="invalid">
            Por-favor informe o Preço de venda
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Data de validade</Form.Label>
          <Form.Control type="date"  required />
          <Form.Control.Feedback type="invalid">
            Por-favor informe a data de validade
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

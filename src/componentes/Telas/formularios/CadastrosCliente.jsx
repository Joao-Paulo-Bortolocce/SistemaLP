import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroCliente(props) {
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
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" placeholder="123.456.789-01" required />
          <Form.Control.Feedback type="invalid">
            Por Favor informe seu CPF
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
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
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="text" placeholder="CEP" required />
          <Form.Control.Feedback type="invalid">
            Por-favor informe seu CEP
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Estado</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="">Estado</option>
            <option value="ac">Acre</option>
            <option value="al">Alagoas</option>
            <option value="ap">Amapá</option>
            <option value="am">Amazonas</option>
            <option value="ba">Bahia</option>
            <option value="ce">Ceará</option>
            <option value="df">Distrito Federal</option>
            <option value="es">Espírito Santo</option>
            <option value="go">Goiás</option>
            <option value="ma">Maranhão</option>
            <option value="mt">Mato Grosso</option>
            <option value="ms">Mato Grosso do Sul</option>
            <option value="mg">Minas Gerais</option>
            <option value="pa">Pará</option>
            <option value="pb">Paraíba</option>
            <option value="pr">Paraná</option>
            <option value="pe">Pernambuco</option>
            <option value="pi">Piauí</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="rn">Rio Grande do Norte</option>
            <option value="rs">Rio Grande do Sul</option>
            <option value="ro">Rondônia</option>
            <option value="rr">Roraima</option>
            <option value="sc">Santa Catarina</option>
            <option value="sp">São Paulo</option>
            <option value="se">Sergipe</option>
            <option value="to">Tocantins</option>

          </Form.Select>
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
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control type="date" required />
          <Form.Control.Feedback type="invalid">
            Por-favor informe a data de nascimento
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
      <Row>

        <Col md={1}><Button type="submit">Cadastrar</Button></Col>
        <Col md={{ offset: 1 }}>
          <Button onClick={() => { props.setExibirTabela(true) }}>Voltar</Button>
        </Col>
      </Row>
    </Form>
  );
}

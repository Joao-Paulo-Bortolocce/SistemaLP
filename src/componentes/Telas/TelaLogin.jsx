import { Container, Form, Button } from "react-bootstrap";
import { useContext, useRef } from "react";
import { ContextoUsuario } from "../../App";
import { consultarUsuario } from "../../servicos/servicoUsuario";

export default function TelaLogin() {
  const nomeUsuario = useRef();
  const senha = useRef();
  const setUsuario = useContext(ContextoUsuario);

  function handleSubmit(event) {
    const usuarioDigitado = nomeUsuario.current.value;
    const senhaDigitada = senha.current.value;
    let teste=true
    let i = 0;
    consultarUsuario(usuarioDigitado).then((resultado) => {
      let lista = resultado.listaDeUsuarios;
      let listaId= resultado.listaDeIds
      while (teste && i<lista.length) {
        if (usuarioDigitado === lista[i].username && senhaDigitada === lista[i].senha) {
          setUsuario({
            "id": listaId[i],
            "username": lista[i].username,
            "senha": lista[i].senha,
            "email": lista[i].email,
            "tipo": lista[i].tipo,
            "logado": true
          })
          teste=false;
        }
        i++;
      }
      if(teste){
        alert("Usuario não encontrado, senha o username incorretos")
      }
    })

    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <Container className="w-25 border p-2">

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Informe o usuário" id="usuario" name="usuario" ref={nomeUsuario} />
          <Form.Text className="text-muted">
            Nunca compartilhe suas credenciais de acesso
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" id="senha" name="senha" ref={senha} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
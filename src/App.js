import Pagina from "./componentes/layouts/Pagina";


function App() {
  return (
    <div className="App">
      <Pagina>
        <h1>Esta é a pagina de cadastro de cliente</h1>
      </Pagina>
      <Pagina>
        <h1>Esta é a pagina de cadastro de Produto</h1>
      </Pagina>
      <Pagina>
        <h1>Esta é a pagina de cadastro de Fornecedor</h1>
      </Pagina>
    </div>
  );
}

export default App;

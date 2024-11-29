
import Tela404 from "./componentes/Telas/Tela404";
import TelaCadastroProdutos from "./componentes/Telas/TelaCadastroProduto";
import TelaCadastroCategorias from "./componentes/Telas/TelaCadastroCategoria";
import TelaCadastroFornecedor from "./componentes/Telas/TelaCadastroFornecedor";
import TelaCadastroCliente from "./componentes/Telas/TelaCadastroCliente";
import TelaCadastroUsuario from "./componentes/Telas/TelaCadastroUsuario";
import TelaCadastroEntregador from "./componentes/Telas/TelaCadastroEntregador";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import TelaMenu from "./componentes/Telas/TelaMenu";
import TelaLogin from "./componentes/Telas/TelaLogin";
import { useState, createContext } from "react";
import store from "./redux/store.js";
import { Provider } from "react-redux";

export const ContextoUsuario= createContext();
function App() {
  const [usuario,setUsuario] = useState({
    "usuario":"",
    "logado":false
  })

  if(!usuario.logado){
      return(
        <ContextoUsuario.Provider value={setUsuario}>
          <TelaLogin />
        </ContextoUsuario.Provider>
      )
  }else{
    return (
      <div className="App">
        <Provider store={store}>
          <ContextoUsuario.Provider value={{usuario,setUsuario}}>
            <BrowserRouter>
              <Routes>
                <Route path="/produto" element={<TelaCadastroProdutos />} />
                <Route path="/categoria" element={<TelaCadastroCategorias />} />
                <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
                <Route path="/cliente" element={<TelaCadastroCliente />} />
                <Route path="/usuario" element={<TelaCadastroUsuario />} />
                <Route path="/entregador" element={<TelaCadastroEntregador />} />
                <Route path="/" element={<TelaMenu />} />
                <Route path="*" element={<Tela404 />} />
              </Routes> {/* A ordem das rotas é importante, por isso o Tela404 vem por ultimo com o * que significa que qualquer rota chama ele, e então deve ser o ultimo se não será chamado sempre*/}
            </BrowserRouter>
          </ContextoUsuario.Provider>
        </Provider>
      </div>
    );
  }

  
}

export default App;

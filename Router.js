import React, { Component } from "react";
import { View, } from "react-native";
import { Scene, Router } from "react-native-router-flux";

import Login from "./scr/AuthContainer/Login";
/* import Cadastro from "./src/screens/Cadastro";
import PreCadastro from "./src/screens/PreCadastro";
import CadastroCompania from "./src/screens/CadastroCompania";
import Dashboard from "./src/screens/Dashboard";
import Rota from "./src/screens/Rota";
import Produtos from "./src/screens/Produtos";
import CadastroProdutos from "./src/screens/CadastroProdutos";
import ListaProdutos from "./src/screens/ListaProdutos";

console.disableYellowBox = true;
console.ignoredYellowBox = [' Configurando um timer ']
*/


class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="app">
            <Scene key="auth" initial hideNavBar>

              <Scene key="login" component={Login} initial />
              {/* 							<Scene key="preCadastro" component={PreCadastro} />
							<Scene key="cadastro" component={Cadastro} />
							<Scene key="cadastroCompania" component={CadastroCompania}  />
							<Scene key="dashboard" component={Dashboard} />
							<Scene key="rota" component={Rota} />
							<Scene key="produtos" component={Produtos}  />
							<Scene key="cadastroProdutos" component={CadastroProdutos} />
							<Scene key="listaProdutos" component={ListaProdutos} /> */}

            </Scene>
          </Scene>
        </Router>
      </View>
    );
  }
}


export default RouterComponent;

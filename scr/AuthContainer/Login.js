import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, ScrollView, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import { Icon } from 'react-native-elements'
// import {Logo} from '../../assets/icon.png';

var { height, width } = Dimensions.get('window');


export default class Login extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      email: "nathangabriel27@gmail.com",
      senha: "semsenha"
    };
  }

  render() {
    return (

      <View style={{ flex: 1, flexDirection: 'column' }} >

        <View style={{ width: '100%', height: '80%', shadowColor: "#000", shadowOffset: { width: 0, height: 7, }, shadowOpacity: 0.43, shadowRadius: 9.51, elevation: 25, }} >

          <View style={styles.container}>
            <Image style={styles.iconTruck} source={require('../../assets/icon.png')} />

            <Text style={styles.titleText}>PiTruck</Text>

            <View style={styles.viewInput}>
              <Icon style={styles.icon} name='person' />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => this.setState({ email: text })}
                placeholder="seu email"
                placeholderTextColor='#fff'
                value={this.state.email}
              />

            </View>
            <View style={styles.viewInput} >

              <Icon style={styles.icon} name='lock' />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => this.setState({ senha: text })}
                placeholder="sua senha"
                placeholderTextColor='#fff'
                secureTextEntry
                value={this.state.senha}
              />
            </View>
            <TouchableOpacity onPress={() => this.esqueciMinhaSenha()} style={styles.forgotButton} >
              <Text style={styles.forgotText}>Esqueceu sua senha ?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.loginUser(this.state.email, this.state.senha)} style={styles.loginButton} >
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

          </View>

        </View>

        <View style={{ widht: '100%', height: '19%', backgroundColor: '#FFF', justifyContent: 'center' }} >

          <TouchableOpacity style={styles.forgtButton} >
            <Text style={styles.forgtText}>Não é membro ainda?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.abrirPreCadastro()} style={styles.askButton} >
            <Text style={styles.buttonText}>Cadastre - se </Text>
          </TouchableOpacity>

        </View>

      </View>

    );
  }// fim do render  


  abrirPreCadastro() {
    Actions.preCadastro();
  }


  loginUser(email, password) {
    //Alert.alert("Confirmar dados", "Verifique se os dados estão corretos.\nEmail: " + email + "\nSenha: "+ password);
    console.log("tentando fazrlogin");
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((dadosUsuario) => {

        //Alert.alert("Sucesso!");
        Actions.dashboard();
      })
      .catch((error) => {
        // Tratando erros de autenticação
        if (error.code == "auth/invalid-email") {
          Alert.alert("Opa!", "Email ou senha de usuario esta invalido, tente novamente");
        } else {
          if (error.code == "auth/wrong-password") {
            Alert.alert("Eita !", 'Email ou senha está incorreto,  verifique se tem 6 caracteres e tente novamente. ');
          } else {
            if (error.code == "auth/user-not-found") {
              Alert.alert('Vishhhhh', 'Este usuario não existe ou esta errado, clique no botão de cadastro ou redefina sua senha',
                [
                  { text: 'Criar conta ', onPress: () => Actions.cadastro() },
                  { text: 'Tentar novamente' },
                ],
              )
            }
          }
        }
      });
  }


  esqueciMinhaSenha() {
    if (this.state.email == "") {
      Alert.alert("Você esqueceu ? ", "Primeiro você precisa informar o seu e-mail para ser redefinido. ");
    }
    else {
      Alert.alert(
        'Recuperar senha',
        'Deseja realmente recuperar a senha do e-mail?\n' + this.state.email + '?',
        [
          { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          {
            text: 'OK', onPress: () =>
              this.resetPassword()

          },
        ],

        { cancelable: false }
      )
    }
  }

  resetPassword() {
    var auth = firebase.auth();
    var emailAddress = this.state.email;
    auth.sendPasswordResetEmail(emailAddress).then(function () {
      Alert.alert("Sucesso!!", "email de recuperacao enviado verifique seu email")
    })
  }


}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008B8B',
  },


  mainButton: {
    backgroundColor: "#4f8942",
  },

  textButton: {
    color: "white",
    margin: 20
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },

  askButton: {
    backgroundColor: "#008B8B",
    borderWidth: 0.5,
    borderColor: '#222',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 0,
    marginBottom: 40,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7, },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 25,
  },

  loginButton: {
    backgroundColor: "#66CDAA",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#222',
    padding: 10,
    margin: 20,
    marginBottom: 10,
    width: width * 0.8,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7, },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 25,
  },

  forgotButton: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: width * 0.8,
    alignItems: 'center'
  },

  forgtButton: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.9,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
  },

  forgotText: {
    color: "#222",
    textDecorationLine: "underline"
  },

  forgtText: {
    color: "#23541b",
    fontWeight: 'bold',
  },

  welcomeText: {
    color: "gray",
    fontSize: 38,
    alignItems: "center",
    textAlign: 'center'
  },

  logoStyle: {
    width: width * 0.55,
    height: width * 0.55
  },

  titleText: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 50,
    alignItems: 'center',
    textAlign: 'center',
    color: "#FFF",
    fontStyle: 'italic'
  },

  meuBotao: {
    backgroundColor: 'green',
    width: width * 0.8,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  estiloTexto: {
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center'
  },

  inputStyle: {
    height: height * 0.06,
    width: width * 0.85,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    margin: width * 0.04,
    color: "#fff"
  },

  icon: {
    margin: 15,
    color: "#fff"
  },

  viewInput: {
    margin: 20,
    flexDirection: 'row',
    alignItems: "center"
  },

  textSubtitulo: {
    marginTop: 15,
    color: '#ffffff',
    fontSize: 20,
  },

  iconTruck: {

    marginTop: 10,
    width: 58,
    height: 56,
  },

});

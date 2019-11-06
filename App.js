import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Router from './Router';
import firebase from 'firebase';
    

console.disableYellowBox = true;
console . ignoredYellowBox  = [' Configurando um timer ']


var { height, width } = Dimensions.get('window');



const instructions = Platform.select({
  ios: 'Texto IOS',
  android:
    'Texto Android',
});


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      text: "Menu texto aqui",
      deviceWidth: width,
      deviceHeight: height
    };
  }
 

  componentWillMount() {
    //Posso Fazer qualquer tipo de configuração global aqui como por exemplo o Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
/*         apiKey: "AIzaSyDgaCFXCapkNEC4daieScKGIRCTbouWxuM",
        authDomain: "doc-pi.firebaseapp.com",
        databaseURL: "https://doc-pi.firebaseio.com",
        projectId: "doc-pi",
        storageBucket: "doc-pi.appspot.com",
        messagingSenderId: "784412510062",
        appId: "1:784412510062:web:234500d8917c637c7fe37f",
        measurementId: "G-T5BK0MYR4G" */

        apiKey: "AIzaSyDxq6PCLeOROGN07IJJZ5ejZwz2Nlmn76Q",
        authDomain: "projeto-pitruck.firebaseapp.com",
        databaseURL: "https://projeto-pitruck.firebaseio.com",
        projectId: "projeto-pitruck",
        storageBucket: "projeto-pitruck.appspot.com",
        messagingSenderId: "571242146199",
        appId: "1:571242146199:web:1e8fce4ac623f921c8fcd2",
        measurementId: "G-L8Z13MSN5P"
      })
    }
  }
  render() {
    return (
      <Router></Router>
    );
  }

}





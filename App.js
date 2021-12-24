import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Image} from 'react-native';
import models from './components/models';

export default function App() {
  
  return (
    
    <View style={models.container}>

      <Text style = {models.tit}> QueDia?</Text>
      <Text style = {models.cc}>A vacina começou a ser implementada no Brasil no começo de 2020. Com objetivo de evitar aglomerações e facilitar o acesso a informações relacionadas, desenvolvemos esta plataforma para que todos os brasileiros tenham mais noção acerca de sua própria chegada a vacinação!{'\n'}</Text>
    
      <Image style = {models.img} source = {require('./assets/vac.jpg')}/>

      <Text style = {models.paragraph}>{'\n'}Faça login para acompanhar a lista de espera da Vacinação da Covid-19 em São Paulo/SP   </Text>

      
     
      <TextInput style = {models.inputtext} placeholder = " Digite seu e-mail"/>
      <TextInput style = {models.inputtext} secureTextEntry = {true} placeholder = " Digite sua senha"/>

    </View>
  );
}
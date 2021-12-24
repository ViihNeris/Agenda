import * as React from 'react';
import {StyleSheet} from 'react-native';

const models = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D9F4E1',
    padding: 8,
    alignItems: "center"
  },

    tit: {
    marginTop: 20,
    fontSize: 29,
    fontWeight: 400,
    fontStyle: 'italic',
    textAlign: 'center',
    color: "green"
  },

    cc: {
    margin: 24,
    fontSize: 20,
    textAlign: 'justify',
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "green",
    fontStyle: 'italic'
  },

    img: {
   width: 300,
   height: 200,
   borderRadius: 7
  },

   inputtext: {
    widht: 250,
    marginTop: 15,
    fontWeight: 450,
    fontSize: 20,
    background: '#B3C9BA',
    borderRadius: 4
  },

});
export default models;
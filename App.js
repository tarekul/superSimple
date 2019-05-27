import React from 'react';
import { StyleSheet, Text,View} from 'react-native';
import {Button} from 'react-native-elements'
import {actionCreator, store} from './redux';
import {connect, Provider, } from 'react-redux';

class AppInner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Qiu</Text>
        <Text>Tarek</Text>
        <Button title='Test' />
      </View>
    );
  }
}

export default class App extends React.Component{
  render(){
    return (
      <AppInner />
    )
    
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

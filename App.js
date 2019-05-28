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
        <Button onPress={this.props.actionCreator} title='Test' />
        <Text>{this.props.content}</Text>
      </View>
    );
  }
}

export default class App extends React.Component{
  render(){
    return (
      <Provider store = {store}>
        <ConnectedApp />
      </Provider>
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

//functions that inject action creator and state to inner app props
const mapStateToProps = (state) =>{
  return {
    content: state.reducer.content || 'Empty right now'
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    actionCreator : () =>{
      dispatch(actionCreator())
    }
  }
}
//connection to store and innerapp
const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(AppInner);

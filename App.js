import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './js/Splash';
import Main from './js/MainActivity';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { currentScreen:'Splash'};
    setTimeout(()=>{
      this.setState({currentScreen:'Main'})
    },3000)
  }
render() {
  const { currentScreen } = this.state
  let mainScreen = currentScreen === 'Splash' ? <Splash/>:<Main/>
  return mainScreen;

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

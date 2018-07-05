import React, { Component } from 'react';
import { Container, Header, Content, Card, View, CardItem, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions } from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import Login from './Login';
import ListOfEmployees from './ListOfEmployees';
export default class MainActivity extends Component {

  render() {
    
    return (
        <AppNavigator/>
     
    );
  }
}

const AppNavigator = StackNavigator({

    Login:{screen: Login,
        header: { visible: false },
        navigationOptions: {
          title: 'login',
          header: null
        }},

    ListOfEmployees:{screen: ListOfEmployees,
        header: { visible: false },
        navigationOptions: {
            title: 'list of Employees',
            header: null
        }},
    
    

})
import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card,Toast, View,List,ListItem ,CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet, TextInput,FlatList,TouchableOpacity} from 'react-native';
// import RNNode from "react-native-node";

 class MyListItem extends React.Component {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
      };

      render() {
        // const textColor = this.props.selected ? "red" : "black";
        return (
          <TouchableOpacity onPress={this._onPress}>
            <View>
              <Text style={{ color: textColor }}>
                {this.props.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }
}



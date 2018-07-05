import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, 
    Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Label,Picker } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions, TouchableOpacity ,StyleSheet,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';
import { StatusBar } from "react-native";


export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = { fontsAreLoaded: true };
        

    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({fontsAreLoaded: false});
    }
  render() {
      
    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;
    const {goBack} = this.props.navigation;
    if (this.state.fontsAreLoaded) {
        return <Expo.AppLoading />;
      }
    return (
       <Container>
           <View style={{width:'100%',height:25,backgroundColor:'black'}}>
            </View>
            <Header style={{backgroundColor: '#E93F3F'}}>
                <Left style={{marginLeft:-100}}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Login</Text>
                </Left>
            </Header>
            <ScrollView >

                <View style={{width:'100%',height:800,backgroundColor:'white'}}>
                <View style={{width:'100%',height:800,backgroundColor:'black' , position:'absolute',opacity:0.4}}>

                </View>
                <Text style={{fontSize:32, marginTop:10, marginBottom:10,fontWeight:'bold',color:'white', alignSelf:'center' ,elevation:4 ,fontFamily:'sans-serif-condensed'}}>WELCOME!</Text>
                <Text style={{color:'white', fontSize:14,alignSelf:'center' ,elevation:4 ,fontFamily:'sans-serif'}}>Please Login to Continue...</Text>

                <View style={{height:280,width:'90%',backgroundColor:'white',position:'absolute',borderRadius:5,alignSelf:'center',marginTop:'40%'}}>
                <Form>
                    <Item floatingLabel primary style={{height:60}}>
                        <Label style={{top:15,height:40}} ><Image style={{ width:40,height:40,top:20}}source={require('../pics/username.png')}/> <Text style={{fontSize:14}}>   username</Text></Label>
                        <Input keyboardType='email-address' />
                    </Item>
                    <Item floatingLabel primary style={{height:60}}>
                        <Label style={{top:15,height:40}} ><Image style={{ width:40,height:40,top:20}}source={require('../pics/password.png')}/> <Text style={{fontSize:14}}>   password</Text></Label>
                        <Input secureTextEntry require />
                    </Item>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("ListOfEmployees")} >
                            <View style={{height:40,width:130,flexDirection:'row',alignSelf:'center', marginLeft:15,marginTop:20, borderRadius:15, backgroundColor:'#E93F3F'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:18, paddingLeft:'35%',fontFamily:'sans-serif-condensed',textAlignVertical:'center'}}>LOGIN</Text>
                            </View>
                    </TouchableOpacity>
 
                    </Form>
                    <Text style={{color:'#E93F3F', fontSize:16,alignSelf:'center' ,marginTop:15 ,elevation:4 ,fontFamily:'sans-serif'}}>Not a Member...? Register Here!</Text>

                </View>
                
                </View>
              </ScrollView>
        </Container>
    );
  }
}




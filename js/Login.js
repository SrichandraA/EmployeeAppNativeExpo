import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, 
    Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Label,Picker } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions, TouchableOpacity ,
    StyleSheet,TextInput,KeyboardAvoidingView,ScrollView,BackHandler} from 'react-native';
import { StatusBar } from "react-native";
import Toast from 'react-native-simple-toast';


export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = { fontsAreLoaded: true,id:'',password:'' };
        this.onIdChange = this.onIdChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }
    onIdChange(textId){
        this.setState({id:textId});
    }
    onPasswordChange(textPassword){
        this.setState({password:textPassword});
    }

    onLoginClick(){
        fetch('http://192.168.0.5:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Employee_ID: this.state.id,
                Password: this.state.password
            }),
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true
                    
                }); 
               if(result.message === 'success'){
                this.props.navigation.navigate("ListOfEmployees")
               }
               else{
                   Toast.show("Failed...Try Again..!");
               }
            },

            (error) => {
                Toast.show("Check ID and Password..!");

                this.setState({
                    isLoaded: false,	
                });
            }
        );

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
                <Image resizeMode='cover' style={{ width:'100%',height:'100%', position: 'absolute',  left: 0 }} source={require('../pics/logback.jpg')}/>

                <View style={{width:'100%',height:800, position:'absolute',backgroundColor:'black',opacity:0.4}}>

                </View>
                <Text style={{fontSize:32, marginTop:10, marginBottom:10,fontWeight:'bold',color:'white', alignSelf:'center' ,elevation:4 ,fontFamily:'sans-serif-condensed'}}>WELCOME!</Text>
                <Text style={{color:'white', fontSize:14,alignSelf:'center' ,elevation:4 ,fontFamily:'sans-serif'}}>Please Login to Continue...</Text>

                <View style={{height:280,width:'90%',backgroundColor:'white',position:'absolute',borderRadius:5,alignSelf:'center',marginTop:'40%'}}>
                <Form>
                    <Item floatingLabel primary style={{height:60}}>
                        <Label style={{top:15,height:40}} ><Image style={{ width:40,height:40,top:20}}source={require('../pics/username.png')}/> <Text style={{fontSize:14}}>   Employee ID</Text></Label>
                        <Input keyboardType='numeric' onChangeText={this.onIdChange} value={this.state.id} require />
                    </Item>
                    <Item floatingLabel primary style={{height:60}}>
                        <Label style={{top:15,height:40}} ><Image style={{ width:40,height:40,top:20}}source={require('../pics/password.png')}/> <Text style={{fontSize:14}}>   Password</Text></Label>
                        <Input secureTextEntry require onChangeText={this.onPasswordChange} />
                    </Item>
                    <TouchableOpacity onPress={()=>this.onLoginClick()} >
                            <View style={{height:40,width:130,flexDirection:'row',alignSelf:'center', marginLeft:15,marginTop:20, borderRadius:15, backgroundColor:'#E93F3F'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:18, paddingLeft:'35%',fontFamily:'sans-serif-condensed',textAlignVertical:'center'}}>LOGIN</Text>
                            </View>
                    </TouchableOpacity>
 
                    </Form>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Registration")} >
                            <View >
                            <Text style={{color:'#E93F3F', fontSize:16,alignSelf:'center' ,marginTop:15 ,elevation:4 ,fontFamily:'sans-serif'}}>Not a Member...? Register Here!</Text>
                            </View>
                    </TouchableOpacity>

                </View>
                
                </View>
              </ScrollView>
        </Container>
    );
  }
}




import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, 
    Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Label,Picker } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions, TouchableOpacity ,StyleSheet,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';
import { StatusBar } from "react-native";
import Toast from 'react-native-simple-toast';


export default class Registration extends React.Component {

    constructor(props){
        super(props);
        this.state = { fontsAreLoaded: true,id:'',password:'',phone:'',name:'' };
        this.onEmployeeIDChange = this.onEmployeeIDChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRegisterClick = this.onRegisterClick.bind(this);
        this.onEmployeeNameChange = this.onEmployeeNameChange.bind(this);
        this.onEmployeePhoneChange = this.onEmployeePhoneChange.bind(this);
    }
    onEmployeeIDChange(textId){
        this.setState({id:textId});
    }
    onPasswordChange(textPassword){
        this.setState({password:textPassword});
    }
    onEmployeeNameChange(textName){
        this.setState({name:textName});
    }
    onEmployeePhoneChange(textPhone){
        this.setState({phone:textPhone});
    }
    onRegisterClick(){
        this.setState({id:'',password:'',name:'',phone:''});
        fetch('http://192.168.43.75:3000/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Employee_ID: this.state.id,
                Password: this.state.password,
                Name:this.state.name,
                Phone:this.state.phone
            }),
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true
                    
                }); 
               if(result.success === 'success'){
                this.props.navigation.navigate("Login");
                Toast.show(result.message);
               }
               else{
                   Toast.show(result.message);
               }
            },

            (error) => {
                Toast.show("Check the Fields Entered..!");

                this.setState({
                    isLoaded: false,	
                });
            }
        )
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
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Registration</Text>
                </Left>
            </Header>
            <ScrollView >

                <View style={{width:'100%',height:800,backgroundColor:'white'}}>
                <View style={{width:'100%',height:800,backgroundColor:'black' , position:'absolute',opacity:0.4}}>

                </View>
                <Text style={{fontSize:32, marginTop:10, marginBottom:10,fontWeight:'bold',color:'white', alignSelf:'center' ,elevation:4 ,fontFamily:'sans-serif-condensed'}}>HI EMPLOYEE..!</Text>
                <Text style={{color:'white', fontSize:14,alignSelf:'center' ,elevation:4 ,fontFamily:'sans-serif'}}>Fill The Details ...</Text>

                <View style={{height:400,width:'90%',backgroundColor:'white',position:'absolute',borderRadius:5,alignSelf:'center',marginTop:'40%'}}>
                <Form>
                    <Item floatingLabel primary style={{height:60}}>
                        <Label style={{top:15,height:40}} ><Image style={{ width:40,height:40,top:20}}source={require('../pics/employeeid.png')}/> <Text style={{fontSize:14}}>   Employee ID</Text></Label>
                        <Input keyboardType='numeric' onChangeText={this.onEmployeeIDChange} require />
                    </Item>
                    <Item floatingLabel primary style={{height:60}}>
                        <Label style={{top:15,height:40}} ><Image style={{ width:40,height:40,top:20}}source={require('../pics/username.png')}/> <Text style={{fontSize:14}}>   Employee Name</Text></Label>
                        <Input keyboardType='default' onChangeText={this.onEmployeeNameChange} require />
                    </Item>
                    <Item floatingLabel primary style={{height:60}}>
                        <Label style={{top:15,height:40}} ><Image style={{ width:40,height:40,top:20}}source={require('../pics/phone.png')}/> <Text style={{fontSize:14}}>   Employee Phone</Text></Label>
                        <Input keyboardType='numeric' onChangeText={this.onEmployeePhoneChange} require />
                    </Item>
                    <Item floatingLabel primary style={{height:60}}>
                        <Label style={{top:15,height:40}} ><Image style={{ width:40,height:40,top:20}}source={require('../pics/password.png')}/> <Text style={{fontSize:14}}>   Password</Text></Label>
                        <Input secureTextEntry require onChangeText={this.onPasswordChange} />
                    </Item>
                    <TouchableOpacity onPress={()=>this.onRegisterClick()} >
                            <View style={{height:40,width:130,flexDirection:'row',alignSelf:'center', marginLeft:10,marginTop:25, borderRadius:15, backgroundColor:'#E93F3F'}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:18, paddingLeft:'32%',fontFamily:'sans-serif-condensed',textAlignVertical:'center'}}>Register</Text>
                            </View>
                    </TouchableOpacity>
 
                    </Form>
            

                </View>
                
                </View>
              </ScrollView>
        </Container>
    );
  }
}




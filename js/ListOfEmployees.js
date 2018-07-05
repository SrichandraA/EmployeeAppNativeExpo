import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card,Toast, View, ActionSheet ,List,ListItem ,CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet, TextInput,FlatList,TouchableOpacity} from 'react-native';
// import RNNode from "react-native-node";
import GridLayout from 'react-native-layout-grid';
import MyListItem from './MyListItem';
// import call from 'react-native-phone-call'
// import SendIntentAndroid from 'react-native-send-intent';
import Communications from 'react-native-communications';
// import PopupDialog from 'react-native-popup-dialog';


export default class ListOfEmployees extends React.Component {
    componentDidMount() {
        this.onStart();

    }

    //        componentWillUnmount() {
    //            RNNode.stop();
    //            }
    constructor(props){
	    super(props);
		this.state = {value:'',addresses:[],list:'',isLoaded:false,phone:'',email:''};
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onStart = this.onStart.bind(this);
        
        
    }
    renderGridItem = (item) => (
       
        <TouchableOpacity     onPress={() => Communications.phonecall(item.Mobile_Number,true)}
        onLongPress={()=>Communications.email([item.Email_ID],null,null,null,null)}
       >
      <View style={styles.item}  >
      <Text note ellipsizeMode='tail' numberOfLines={1} style={styles.id}>
          {item && item.Department}
        </Text>
        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.name}>
        {item && item.Name }
        </Text>
        <Text ellipsizeMode='tail' numberOfLines={1} note style={styles.note}>
          {item && item.Mobile_Number}
        </Text>
      
      </View>
      </TouchableOpacity>
    );
    
    onStart(){
        fetch("http://192.168.43.75:3000/employee")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true
                    
                });
                let addressArray = [];
                for(let i = 0; i < result.length; i++){
                    addressArray.push((result[i]));
                }
                this.setState({addresses : addressArray});
                    //    console.log(this.state.addresses) 
            },

            (error) => {
                console.log(error);
                this.setState({
                    isLoaded: false,
                    
                });
            }
        )
    }
    onChangeHandler(text){
            this.setState({value:text,list:'',addresses:[]});
            if(text === ''){
                // this.setState({list:'',addresses:[],isLoaded:false});
                // this.setState({value:text});
                this.onStart();

            }
            else{
                fetch("http://192.168.10.173:3000/employee")
				// .then(res => res.json())
				// .then(
				// 	(result) => {
				// 		this.setState({
                //             isLoaded: true
							
                //         });
				// 		// for(let i = 0; i < result.results.length; i++){
                //         //     this.state.addresses.push(JSON.stringify(result.results[i].formatted_address));
                //         // }
                //         console.log(JSON.stringify(result));         
				// 	},
		
				// 	(error) => {
				// 		this.setState({
				// 			isLoaded: false,
							
				// 		});
				// 	}
                // )
                fetch('http://192.168.43.75:3000/employee', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstParam: text,
                    }),
                })
                .then(res => res.json())
				.then(
					(result) => {
						this.setState({
                            isLoaded: true
							
                        });
						// for(let i = 0; i < result.results.length; i++){
                        //     this.state.addresses.push(JSON.stringify(result.results[i].formatted_address));
                        // }
                        // console.log(JSON.stringify(result));  
                        let addressArray = [];
                        for(let i = 0; i < result.length; i++){
                            addressArray.push((result[i]));
                        }
                        this.setState({addresses : addressArray});       
					},
		
					(error) => {
						this.setState({
							isLoaded: false,
							
						});
					}
                )
                
            }


    }
    _keyExtractor = (item, index) => item.id;

    // _onPressItem = (id: string) => {
    //   // updater functions are preferred for transactional updates
    //   this.setState((state) => {
    //     // copy the map rather than modifying state.
    //     const selected = new Map(state.selected);
    //     selected.set(id, !selected.get(id)); // toggle
    //     return {selected};
    //   });
    // };
  
    _renderItem = ({item}) => (
        // console.log("item")
      <MyListItem
        id={item.id}
        // onPressItem={this._onPressItem}
        // selected={!!this.state.selected.get(item.id)}
        title={item.emp_name}
      />
    );
  render() {

    var items = [{'emp_name':'fdd'},{'emp_name':'aee'}];
    // this.state.addresses.push({"hi":"bye"});

    //console.log((this.state.addresses));
    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;
    return (
        <Container>
             <Header style={{backgroundColor: '#E93F3F',paddingTop:25}}>
                <Left style={{marginLeft:-100}}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>List Of Employees</Text>
                </Left>
            </Header>
             <Content>
                <View style={{width:screenWT,
                            backgroundColor:'#FAFAFA',
                            height:90, 
                            paddingTop:20,
                            paddingBottom:20,
                            paddingLeft:10,
                            paddingRight:10,
                            justifyContent:'center',
                            alignItems:'center'}}>

                    <Item style={{backgroundColor:'white',elevation:3}}>
                        <Icon active name='search' style={{paddingLeft:10,color:'#cccccc'}} />
                        <Input style={{fontSize:14 , height:42,}} placeholderTextColor='#cccccc' placeholder='Search Employee' onChangeText={this.onChangeHandler } />
                    </Item>
                </View>
      
            <View>
                {this.state.isLoaded && 
    //    <FlatList
    //    data={this.state.addresses}
    //    keyExtractor={this._keyExtractor}
    //    renderItem={this._renderItem}
    //  />           
                // <FlatList
                //     data={this.state.addresses}
                //     renderItem={({item}) =>
                //     <TouchableOpacity
                //     onPress={()=>this.props.navigation.navigate("#")}

                //     >
                //         <View style={{marginLeft:7,flex:1,flexDirection:'row',height:50,width:'100%',borderBottomColor:'#999999',borderBottomWidth:0.5}}>
                //             <Text style={{textAlignVertical:'center',marginLeft:10,color:'#4c4c4c',fontSize:14}} key='x'>{item.emp_name}</Text>
                //         </View>
                //     </TouchableOpacity>
                //     }
                //     keyExtractor={() => Math.random().toString(36).substr(2, 9)}
                // />    
                <View style={styles.container}>
                <View style={styles.flex}>
                    <GridLayout
                        items={this.state.addresses}
                        itemsPerRow={1}
                        renderItem={this.renderGridItem}
                    />
                </View>
            </View>
                }            
            </View>

        </Content>
      </Container>
    );
   
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
      backgroundColor: '#e3e4e5',
    },
    welcome: {
    },
    flex: {
      flex: 1,
    },
    item: {
      height: 45,
      backgroundColor: 'white',
      padding: 10,
      flexDirection:'row',
      display: 'flex',
      justifyContent:'space-between',
      
      elevation:3
    },
    name: {
      fontSize: 16,
    //   top:-5,
    //   flex:0.5,
    //   textAlign: 'center',
    flexWrap: 'nowrap',
    width:'40%',
    overflow:'hidden',
    marginLeft:10,
    marginRight:5,
    fontFamily:'sans-serif-condensed',
    fontWeight:'bold',
      color: '#0191C8'
    },

    note: {
      fontSize: 15,
      fontFamily:'sans-serif-condensed',
    fontWeight:'bold',
    width:'20%',
    marginRight:5,

    //   flex:0.25,
    //   textAlign: 'right',
      color: '#74C2E1'
    },
 
    id:{
        fontSize: 16,
        // top:-5,
        width:'40%',

        fontFamily:'sans-serif-condensed',
    fontWeight:'bold',
        // flex:0.25,
        // textAlign:'left',
        color: '#0191C8'
    }
  });


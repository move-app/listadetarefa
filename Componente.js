import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Alert, TextInput,Modal} from 'react-native';
import * as Icon from 'react-native-feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Database from './Database';
export default function AppTarefa(props){
    const [visible,setVisible]=useState(false);
    const [editIndex, setEditIndex] = useState(-1);
    function handleDeletePress(){
        Alert.alert("Atenção",
        "Você tem certeza que deseja excluir essa tarefa?",
        [{
            text:"Não",
            onPress:()=>{
                return;
            },
            style: "cancel"
        },
        {
            text:"Sim",
            onPress: async  ()=>{
                await Database.deleteItem('tarefas',props.id);
                
                props.navigation.navigate("AppList", {id: props.id});
            },
        }
    ],
    {cancelable:false}
        );
    }
   async function handleEditPress(){
    const item= await Database.getItem(props.id);
    props.navigation.navigate('AppForm',item);       
   }
    return(
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.tarefa}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={handleDeletePress} style={styles.deleteButton} >
                        <Icon.Trash  
                                color='white' size={18} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEditPress} style={styles.editButton}>
                        <Icon.Edit  
                                color='white' size={18} />
            </TouchableOpacity>
            
        </View>           
    </View>
    
 );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
        },
        buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
        },
        editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
        },
        deleteButton: {
            marginLeft: 10,
            height: 40,
            width: 40,
            backgroundColor: 'red',
            borderRadius: 10,
            padding: 10,
            fontSize: 12,
            elevation: 10,
            shadowOpacity: 10,
            shadowColor: '#ccc',
            alignItems: 'center'
            },
            textItem: {
            fontSize: 20,
            },
            textom:{
                fontSize:18,
                fontWeight:'bold',
                marginVertical:10,
                textAlign:'right'
              },
              inputm:{
                padding:10,
                borderWidth:1,
                borderRadius:10,
                marginTop:10,
                borderColor:'gray'
              },
              buttonm:{
                marginTop:10,
              height:40,
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:'#1c6cce',
              borderRadius:4,
              }
   });
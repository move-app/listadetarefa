import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppTarefa from './Componente';
import Database from './Database';
export default function AppList({route, navigation}){
    const [tarefas,setTarefas]=useState([]);
    
        useEffect(() => {
            Database.getItems('tarefas').then(tarefas=>setTarefas(tarefas));
        }, [route]);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tarefas </Text>
            <StatusBar style='light'/>
            <ScrollView
 style={styles.scrollContainer}
 contentContainerStyle={styles.itemsContainer}>
 {tarefas.map(item => {
 return <AppTarefa 
key={item.id} id={item.id} tarefa={item.tarefa}
navigation={navigation} />
 })}
 </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#036FFC',
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
        },
        scrollContainer: {
            flex: 1,
            width: '90%'
            },
            itemsContainer: {
            marginTop: 10,
            padding: 20,
            borderRadius: 10,
            alignItems: 'stretch',
            backgroundColor: '#fff'
            },
   });
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Database from './Database';
export default function AppEdit({setTarefa,tarefa}){
   
  
    const [editing, setEditing] = useState(false);
    // ...
    const handleEditing = () => {
      setEditing(true);
    };
    function handleEditInputChange(e) {
        // set the new state value to what's currently in the edit input box
        setTarefa({ ...tarefa, text: e.target.value });
        console.log(tarefa);
      }
    return(
        <View style={styles.container}>
      <Text style={styles.title}>Editar a Tarefa</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={tarefa}
          placeholder="Editar a Tarefa"
          />
        <TouchableOpacity style={styles.button} onPress={handleEditInputChange}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
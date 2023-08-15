import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Database from './Database';
import { Edit, Trash } from 'react-native-feather';


export default function AppItem(props) {
    function handleDeletePress() {
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Sim", onPress: () => {
                        Database.deleteItem(props.id)
                            .then(response => props.navigation.navigate("AppList", { id: props.id }));
                    }
                }
            ],
            { cancelable: false }
        );
    }
    async function handleEditPress() {
        const item = await Database.getItem(props.id);
        props.navigation.navigate("AppForm", {item: item, edit: true});
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.item}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDeletePress}>
                    <Trash   color="white" size={18} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditPress}>
                    <Edit color="white" size={18} />
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
    buttonContainer: {
        flexDirection: "row"
      },
      buttonText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
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
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    }
});
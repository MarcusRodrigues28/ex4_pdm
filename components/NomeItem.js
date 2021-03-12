import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const NomeItem = (props) => {
    return (
        <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)} 
        underlayColor="white" delayLongPress={800}>
        <View style={styles.itemNaLista}>
            <Text>{props.nome}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
itemNaLista: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 16,
    alignItems: 'center'
  }
})

export default NomeItem;
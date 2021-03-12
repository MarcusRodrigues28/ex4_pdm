import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';


const NomeInput = (props) => {
    const [nome, setNome] = useState('');
    
    const capturarNome = (nome) => {
        setNome(nome);
    }

    return (
        <View style={styles.nomeView}>
            <TextInput
                placeholder="(Nome)"
                style={styles.nomeInputText}
                onChangeText={capturarNome}
                value={nome}
            />
            <View style={{width: '80%', padding: 12, marginBottom: 8}}>
            <Button title="add nome"
                onPress={() => props.onAdicionarNome(nome)}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    nomeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    nomeInputText: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2
    }
});

export default NomeInput;
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import NomeItem from './components/NomeItem';
import NomeInput from './components/NomeInput';


export default function App() {
  const [nomes, setNomes] = useState([]);
  const [contadorNome, setContadorNome] = useState(0);

  const adicionarNome = (nome) => {
    setNomes(nomes => {
      setContadorNome(contadorNome + 1);
      return [{ key: contadorNome.toString(), value: nome }, ...nomes];
    })
  }

  const removerNome = (keyASerRemovida) => {
    setNomes(nomes => {
      return nomes.filter((nome) => {
        return nome.key !== keyASerRemovida;
      });
    });
  }

  return (
    <View style={styles.container}>
      <NomeInput onAdicionarNome={adicionarNome} />
      <View>
        <View style={{ width: '80%', alignSelf: "center" }}>
          <FlatList
            data={nomes}
            renderItem={
              nome => (
                <NomeItem
                  nome={nome.item.value}
                  chave={nome.item.key}
                  onDelete={removerNome}
                />
              )
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  lembreteInputView: {
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    textAlign: 'center'
  },
  lembreteInputButton: {
    width: '80%'
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center'
  }
});

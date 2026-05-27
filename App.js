import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import Resultcard from './src/Components/Resultcard';
import Resultbot from './src/Components/Resultbot';


export default function App() {
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [melhor, setMelhor] = useState('');

  const [porcento, setPorcento] = useState('');

  function processarDados() {

    let x = Number(gasolina) * 0.7;

    let y = Number(etanol);

    if (y <= x) {
      setMelhor("ETANOL");
    }else {
      setMelhor("GASOLINA");
    }
    setPorcento(Math.round(Number(etanol) / Number(gasolina) * 100)) 
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ÁLCOOL OU GASOLINA</Text>
      <Image style={styles.imagem}
        source={require('./assets/logo.webp')}/>
      <View style={styles.entradaEtanol}>
        <Text style={styles.inputTexto}>Preço do etanol (R$)</Text>
        <TextInput style={styles.inputPreco}
          placeholder='Digite o valor do etanol'
          onChangeText={setEtanol}
          value={etanol}
        />
      </View>
      <View style={styles.entradaGasolina}>
        <Text style={styles.inputTexto} >Preço do Gasolina (R$)</Text>
        <TextInput style={styles.inputPreco} 
          placeholder='Digite o valor da gasolina'
          onChangeText={setGasolina}
          value={gasolina}
        />
      </View>
      <Resultbot Pressionar={processarDados}></Resultbot>
      <Resultcard  melhor={melhor}  porcento={porcento}></Resultcard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#879cef',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  entradaGasolina: {
    border: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,

    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    gap: 5,

    backgroundColor: 'tomato',
  },
  entradaEtanol: {
    border: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,

    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    gap: 5,

    backgroundColor: 'lime',
  },
  inputPreco: {
    border: 'solid',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 6,
  },
  inputTexto: {
    fontWeight: 'bold',

  },
  imagem:{
    borderRadius: 5,
    width:80,
    height:80,
  }
});

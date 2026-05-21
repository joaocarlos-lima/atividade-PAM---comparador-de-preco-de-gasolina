import { StyleSheet, Text, View, Image, TextInput,Button } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ÁLCOOL OU GASOLINA</Text>
      <Image />
      <view style={styles.entradaEtanol}>
        <Text style={styles.inputTexto}>Preço do etanol (R$)</Text>
        <TextInput style={styles.inputPreco}></TextInput>
      </view>
      <view style={styles.entradaGasolina}>
        <Text style={styles.inputTexto} >Preço do Gasolina (R$)</Text>
        <TextInput style={styles.inputPreco } />
      </view>
      <Button title='Calcular vantagem'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#879cef',
    alignItems: 'center',
    justifyContent: 'center',

    gap:20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  entradaGasolina:{
    border:'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4 ,

    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    gap: 5,

    backgroundColor: 'tomato',
  },
  entradaEtanol:{
    border:'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10 ,

    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    gap: 5,

    backgroundColor: 'lime',
  },
  inputPreco: {
    border: 'solid',
    borderWidth:  1.5,
    borderRadius: 20,
  },
  inputTexto: {
    fontWeight: 'bold',

  },
});

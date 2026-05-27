import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

function Resultbot(props) {
    return(
        <TouchableOpacity style={styles.botao} onPress={props.Pressionar}>
            <Text style={styles.botaoTexto}>Calcule a vantagem</Text>
        </TouchableOpacity>
    )
}
export default Resultbot;
const styles = StyleSheet.create({
botao:{
    backgroundColor:'#caec04',
    width: '70%',
    height:40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    cursor:'pointer',
},
botaoTexto:{
    fontSize:20,
    fontWeight:'bold'
},
});
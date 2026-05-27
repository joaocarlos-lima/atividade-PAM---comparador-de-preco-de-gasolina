import { StyleSheet, Text, View } from "react-native"

function Resultcard(props) {
    return (
        <View style={styles.principal}>
            <Text style={styles.principalTexto}> Abasteça com {props.melhor}</Text>
            <Text style={styles.principalTexto}>o etanol está custando {props.porcento}% da gasolina</Text>
        </View >
    );
}
export default Resultcard;

const styles=StyleSheet.create({

    principal: {
        border: 1,
        borderRadius: 20,
        backgroundColor: '#0932d6',
        padding: 10,
        width:'90%',

    },
    principalTexto: {
        fontSize: 20,
        color: 'white',
    },
});
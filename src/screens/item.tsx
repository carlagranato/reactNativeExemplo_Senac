import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

import colchaCroche from '../../assets/colchaCroche1.jpg';

const ItemScreen: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Colcha Granny Square</Text>
            <Image style={styles.imagem} source={colchaCroche}/>
            <Text style={styles.descricao}>
                Colcha de crochê colorida, feita com várias lãs coloridas Mollet da Círculo. 
            </Text>
            <Text style={styles.preco}>R$250,00</Text>

            <TouchableOpacity style={styles.botaoEditar} onPress={() => {}}>
                <Text style={styles.textoEditar}>Editar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#fbaaef',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
    },

    descricao: {
        fontSize: 18,
        textAlign: 'center',
    },

    imagem: {
        height: 600,
        width: 800,
        margin: 20,
        
    },

    preco: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,

    },

    botaoEditar: {
        borderRadius: 8,
        backgroundColor: '#e20875',
        marginTop: 20,
        padding: 16,  
    },

    textoEditar: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',

    }

})

export default ItemScreen;
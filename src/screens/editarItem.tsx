import React from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const EditarItem: React.FC = () => {
    return (
        <View style={styles.container} > 
            <TextInput style={styles.titulo} placeholder="Título do produto"  />
            <TextInput style={styles.descricao} placeholder="Descrição"  />

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoSalvar}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fa90ea',
        padding: 20,
        marginBottom: 20,
    },

    titulo: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,       

    },

    descricao: {
        backgroundColor: '#fff',
        marginTop: 8,
        borderRadius: 8,
        padding: 8, 
        height: 80,

    },

    botao: {
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#e20875',
        marginTop: 20,  
    },

    textoSalvar: {
        alignItems: 'center',
        fontWeight: 'bold',
        margin: 15,
        color: '#fff',
    }
})

export default EditarItem
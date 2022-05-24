import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import image from './assets/bolsaurso.jpg';

const ProfileScreen: React.FC = () => {
    return (
        <View style={styles.container} >
        <Text style={styles.mensagem}> Crocheland </Text>
        <Text>A magia feita com lã e agulha</Text>
        <Image style={styles.image} source={image} />
        <Button title='Entrar' onPress={() => {}} />
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: '#fbaaef',
        justifyContent: 'center',
        alignItems: 'center',

    },

    mensagem: {
        fontSize: 24,
        fontWeight: 'bold',

    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20,

    }
})

export default ProfileScreen
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, TouchableOpacity, Text } from 'react-native';

const LoginScreen: React.FC = () => {

    const [Sucesso, setSucesso] = useState(false)
    const [Erro, setErro] = useState(false)
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const botaoEntrar = () => {
        const loginCorreto = (nomeUsuario === 'adm') && (senha === '123')

       /*  if (loginCorreto) {
            setSucesso(true)
            setErro(false)
        } else {
            setSucesso(false)
            setErro(true)
        } */
        
        setSucesso(loginCorreto)
        setErro(!loginCorreto)

      } 

    return (
        <View style={styles.container}>

        {
            Sucesso &&
            <Text style={styles.sucesso}> Seja bem vindo à Crocheland!</Text>
        }

        {
            Erro &&
            <Text style={styles.erro} >ERRO! Tenta novamente</Text>
        }

            <TextInput style={styles.input} placeholder="Nome do usuário" onChangeText={setNomeUsuario} />
            <TextInput style={styles.input} placeholder="Senha" onChangeText={setSenha} />
            <TouchableOpacity  style={styles.botao} onPress={botaoEntrar}>
                <Text style={styles.entrar}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkNovoUsuario} onPress= {() => {}} >
                <Text>Cadastre-se aqui</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 32,
        justifyContent: 'center',
        flexGrow: 1,
        backgroundColor: '#fbaaef',

    },

    input: {
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,

    },

    botao: {
        borderRadius: 8,
        backgroundColor: '#e20875',
        marginTop: 20,       

    },

    entrar: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
        margin: 5,

    },

    linkNovoUsuario: {
        fontSize: 24,
        padding: 16,
        alignItems: 'center',

    },

    sucesso: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#e20875',
        backgroundColor: '#ad6ea4',
        borderRadius: 8,

    },

    erro: {
        fontSize: 24,
            }

})

export default LoginScreen
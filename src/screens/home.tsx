import React from "react";
import { Text, View, StyleSheet, FlatList, ListRenderItem, TouchableOpacity,   } from 'react-native';
import Item from '../models/item';

const itens: Item[] = [
    {
    id: 1,
    nome: 'Colcha Granny Square',
    descricao: 'Colcha de croche solteiro'
    },

    {
    id: 2,
    nome: 'Bolsa Ursolino',
    descricao: 'Bolsa de crochê em formato de urso'
    },

    {
    id: 1,
    nome: 'Xale Abraço',
    descricao: 'Xale de croche feito com lão acrílica vermelha'
    }
]

const HomeScreen : React.FC = () => { /* O {item} na verdade é uma desestruturação de ListrenderItemInfo.Item, que é um objeto de ListRenderItem (que nos permite acessar o item, e as propriedades de cada item)*/

    const renderFlatlistItem: ListRenderItem<Item> = ({item}) => {
        return(
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>{item.nome}</Text>
            </View>
        )
    }

    return(
        <View>
            <FlatList 
            renderItem={renderFlatlistItem} 
            data={itens}
            /> 

            <TouchableOpacity>
                <Text style={styles.novoItem}>Novo item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#fa90ea',
        padding: 20,
        marginBottom: 20
    },

    listItemText: {
        fontSize: 24,
        textAlign: 'center',
    },

    novoItem: {
        backgroundColor: '#e20875',
        fontSize: 28,
        fontWeight: 'bold',
        borderRadius: 8,
        padding: 10,
        textAlign: 'center',
        color: '#fff',
    }

})

export default HomeScreen
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Data from '../datas/data.json'


/* target first id from data.json and show name user */
const HomeScreen = () => {
    const id = Data[0]._id
    const name = Data[0].user
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{id}</Text>
            <Text>{name}</Text>
        </View>
    )
}



export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Data from '../datas/data.json'

/* Select _id */
const selectId = (id) => {
    return Data.find(item => item._id === id)
}


/* target first id from data.json and show name user */
const HomeScreen = () => {
    const id = Data[0]._id
    const name = Data[0].user
    const date = Data[0].date
    const income = Data[0].incomes
    const amount = Data[0].amount
    const expenses = Data[0].expenses
    const category = Data[0].category
    const comments = Data[0].comments
    const idIncome = Data[0]._id_income
    
    
    /* calculate total incomes with the amount  */
    const totalIncome = income.map(item => item.amount.replace('€','').replace(',','')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)

    /* calculate total expenses with the amount  */
    const totalExpenses = expenses.map(item => item.amount.replace('€','').replace(',','')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)
    
    return (
        <View style={styles.container}>
            {/* select id */}
            <Text>{selectId(id).user}</Text>
            <Text style={styles.text}>{id}</Text>
            <Text style={styles.text}>{name}</Text>
            <Text>{totalIncome}</Text>
            <Text>{totalExpenses}</Text>
            
        </View>
    )
}



export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
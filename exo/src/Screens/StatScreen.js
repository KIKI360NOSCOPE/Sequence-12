/* create stat screen for expense and incomes */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Card, List, Modal, Portal, Paragraph } from 'react-native-paper';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit'
import { Picker } from '@react-native-picker/picker'
import data from '../datas/data.json'


/* import incomes and expenses amount and date for stat */
const ExpensesScreen = () => {
    const [id, setId] = React.useState(data[0]._id)
    const [user, setUser] = React.useState(data[0].user)  
    const [incomes, setIncomes] = React.useState(data[0].incomes)
    const [expenses, setExpenses] = React.useState(data[0].expenses)
    const [date, setDate] = React.useState(data[0].date)
    const [amount, setAmount] = React.useState(data[0].amount)
    const [category, setCategory] = React.useState(data[0].category)
    const [comments, setComments] = React.useState(data[0].comments)
    const [_id_income, set_id_income] = React.useState(data[0]._id_income)
    return (
        <ScrollView>
            <View style={styles.container}>
                <Picker
                    selectedValue={id}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setId(itemValue)
                        setUser(data.find(item => item._id === itemValue).user)
                        setIncomes(data.find(item => item._id === itemValue).incomes)
                        setExpenses(data.find(item => item._id === itemValue).expenses)
                        setDate(data.find(item => item._id === itemValue).date)
                        setAmount(data.find(item => item._id === itemValue).amount)
                        setCategory(data.find(item => item._id === itemValue).category)
                        setComments(data.find(item => item._id === itemValue).comments)
                        set_id_income(data.find(item => item._id === itemValue)._id_income)
                    }
                    }>
                    {data.map(item => (
                        <Picker.Item key={item._id} label={item.user} value={item._id} />
                    ))}
                </Picker>
            </View>
            <View style={styles.container}>
              {/* create linechart for expenses */}
              <LineChart
                data={{
                  labels: expenses.map(item => item.date),
                  datasets: [
                    {
                      data: expenses.map(item => item.amount.replace('€', '').replace(',', '')),
                      color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                      strokeWidth: 2,
                      label: 'Expenses',
                      fill: 'origin',
                      backgroundColor: 'rgba(255, 99, 132, 0.5)',
                      borderColor: 'rgba(255, 99, 132, 0.5)',
                      borderWidth: 1,
                      pointRadius: 1,
                      pointColor: 'rgba(255, 99, 132, 0.5)',
                      pointBackgroundColor: 'rgba(255, 99, 132, 0.5)',
                      pointBorderColor: 'rgba(255, 99, 132, 0.5)',
                      pointBorderWidth: 1,
                    },
                  ],
                }}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                yAxisLabel={'€'}
                yAxisScaleEnabled={true}
                chartConfig={{
                  backgroundColor: '#1e2923',
                  backgroundGradientFrom: '#1e2923',
                  backgroundGradientTo: '#1e2923',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
              {/* create linechart for incomes */}
              <LineChart
                data={{
                  labels: incomes.map(item => item.date),
                  datasets: [
                    {
                      data: incomes.map(item => item.amount.replace('€', '').replace(',', '')),
                      color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                      strokeWidth: 2,
                      label: 'Incomes',
                      fill: 'origin',
                      backgroundColor: 'rgba(255, 99, 132, 0.5)',
                      borderColor: 'rgba(255, 99, 132, 0.5)',
                      borderWidth: 1,
                      pointRadius: 1,
                      pointColor: 'rgba(255, 99, 132, 0.5)',
                      pointBackgroundColor: 'rgba(255, 99, 132, 0.5)',
                      pointBorderColor: 'rgba(255, 99, 132, 0.5)',
                      pointBorderWidth: 1,
                    },
                  ],
                }}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                yAxisLabel={'€'}
                yAxisScaleEnabled={true}
                chartConfig={{
                  backgroundColor: '#1e2923',
                  backgroundGradientFrom: '#1e2923',
                  backgroundGradientTo: '#1e2923',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#1e2923',
        margin: 10,
    }
}
)

export default ExpensesScreen


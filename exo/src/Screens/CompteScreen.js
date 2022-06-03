import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Picker, DatePickerIOS, TouchableOpacity, Alert, Image } from 'react-native';

const CompteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CompteScreen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gestion')}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CompteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00bfff',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})

